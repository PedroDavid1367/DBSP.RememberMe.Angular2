import { Component, Input, Output, EventEmitter, OnDestroy, AfterViewChecked,
  ElementRef, Inject, OnChanges }                     from "@angular/core";
//import { AutoLinkerService }                       from "../common.services/auto-linker.service";
import { Note }                                    from "./note.model";
import { Router, ActivatedRoute, Params }          from "@angular/router";

declare let tinymce: any;
declare let tinyMCE: any;

@Component({
  selector: "notes-detail",
  styles: [`
  div span {
    color: #263238;
  }  
  div p {
    color: #546e7a;
  }
  .ng-valid[required] {
    border-bottom: 1px solid #42A948; /* green */
  }
  .ng-invalid {
    border-bottom: 1px solid #a94442; /* red */
  }
  .ontime {
    color: green;
  } 
  .nearschedule {
    color: red;
  }
  .red {
    color: red;
  }
  .small-text {
    font-size: 10px;
  }
  #contentDisplayer {
    white-space: pre-wrap;
  }
  `],
  template: `
  <div *ngIf="!isEditable && note.Title" class="card lime lighten-5">
    <div class="card-content">
      <span class="card-title">{{ note.Title }}</span>
      <p id="contentDisplayer" [innerHTML]="addAnchors(note.Content)">
      </p>
      <br />  
      <p>Category: {{ note.Category }}</p>
      <p>Priority: {{ note.Priority }}</p>
      <p>Schedule Time: 
        <span [ngStyle]="{'color': scheduleColor}">
          <strong> {{ scheduleTimeString }}</strong>
        </span>
      </p>
    </div> 
    <div class="card-action lime lighten-5">
      <input type="button" class="btn-flat" style="color:black;" value="Edit" (click)="edit()" />
      <input type="button" class="btn-flat" style="color:black;" value="To reminder" />
      <input type="button" class="btn-flat" style="color:black;" value="Delete" (click)="delete()" />
    </div>
  </div>

  <div *ngIf="isEditable" class="card lime lighten-5 z-depth-4">
    <div class="card-content row" style="background-color:white;">
      <!-- This should work, but currently is not, it might be an angular2 issue -->
      <!--<form class="col s12" (ngSubmit)="submit()" #noteForm="ngForm">-->
      <form class="col s12" #noteForm="ngForm">
        <div class="row">
          <div class="input-field col s12">
            <input id="title" type="text" class="validate" required
                   [(ngModel)]="note.Title" name="title"
                   #title="ngModel">  
            <label class="active" for="title" data-error="invalid" data-success="valid">Title</label>
            <div [hidden]="title.valid" 
                class="alert alert-danger">
              <sup style="color:red;">Title is required</sup>
            </div>
          </div>
        </div>

        <!--<div class="row">
          <div class="input-field col s12">
            <textarea id="content" class="materialize-textarea"
                      [(ngModel)]="note.Content" name="content"></textarea>
            <label class="active" for="content">Content</label>
          </div>
        </div>-->

        <div class="row">
          <div class="input-field col s12">
            <div [id]="editContentId"></div>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12 m6">
            <input id="category" type="text" class="validate" required
                  [(ngModel)]="note.Category" name="category"
                  #category="ngModel">
            <label class="active" for="category" data-error="invalid" data-success="valid">Category</label>
            <div [hidden]="category.valid" 
                class="alert alert-danger">
              <sup style="color:red;">Category is required</sup>
            </div>
          </div>

          <div class="input-field col s12 m6">
            <input id="priority" type="number" class="validate" required
                  [(ngModel)]="note.Priority" name="priority"
                  #priority="ngModel">
            <label class="active" for="priority" data-error="invalid" data-success="valid">Priority</label>
            <div [hidden]="priority.valid" 
                class="alert alert-danger">
              <sup style="color:red;">Priority is required</sup>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12 m6">
            <input id="schedule" type="date" class="datepicker">
            <label for="schedule">Schedule</label>
          </div>
        </div>
      </form>
    </div> 
    <div class="card-action blue-grey lighten-2">
      <!--<input class="btn-flat" type="submit" style="color:white;" [disabled]="!noteForm.form.valid" value="Save" />-->
      <input class="btn-flat" type="button" style="color:white;" [disabled]="!noteForm.form.valid" 
             value="Save" (click)="submit()" />
      <input class="btn-flat" type="button" style="color:white;" value="Reset" (click)="resetChanges()" />
      <input class="btn-flat" type="button" style="color:white;" value="Cancel" (click)="cancelEditMode()" />
    </div>
  </div>
  `
})
export class NotesDetailComponent implements OnChanges, OnDestroy {

  @Input() public note: Note;
  @Output() private onDeleteNote: EventEmitter<Note>;
  @Output() private onEditNote: EventEmitter<Note>;
  private _selectedId: number;
  public isEditable: boolean = false;
  private _backupNote: Note;
  public scheduleTimeString: string;
  public scheduleColor: string;
  private _scheduleTimeEvaluator: any;
  private _scheduleTimeSpanTime: number;

  public constructor (private _elRef: ElementRef,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    //private _autoLinker: AutoLinkerService, 
    @Inject("$") private $: any) {

    this.onDeleteNote = new EventEmitter<Note>();
    this.onEditNote = new EventEmitter<Note>();
    this._scheduleTimeSpanTime = 21600000;  // 6 hours
  }

  public get editContentId () {
    return "content-" + this.note.Id;
  }

  // I think this is going to be for a reminder.
  public ngOnChanges () {
    if (this.note.Title) {
      this.cloneNote();
      // Parsing epoch time to human readable value.
      let scheduleTime = new Date(this.note.ScheduleTime);
      this.scheduleTimeString = scheduleTime.toDateString();
      // Evaluating if the schedule time is on time or near complition.
      this.evaluateScheduleTime(scheduleTime);
      // Firing up the scheduler every 6 hours.
      this._scheduleTimeEvaluator = setInterval(() => {
        this.evaluateScheduleTime(scheduleTime);
      }, this._scheduleTimeSpanTime); 
    }  
  }

  private evaluateScheduleTime (scheduleTime: Date) {
    this.scheduleColor = "seagreen";
    let bufferTime = 2; // Default 2 days.
    let actualTime = new Date();
    if (actualTime.getDate() + bufferTime >= scheduleTime.getDate()) {
      this.scheduleColor = "tomato";
    }
  }

  public ngOnDestroy () {
    clearInterval(this._scheduleTimeEvaluator);
  }

  private cloneNote () {
    this._backupNote = new Note(
      this.note.Title,
      this.note.Category,
      this.note.Priority,
      this.note.Content,
      this.note.OwnerId,
      this.note.ScheduleTime,
      this.note.Id
    );
  }

  public delete() {
    this.onDeleteNote.emit(this.note);
  }

  // A way better implementation than using the previous 
  // implementation with ngAfterViewChecked.
  public edit() {
    setTimeout(() => {
      this.$(this._elRef.nativeElement)
        .find("#schedule").pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15     // Creates a dropdown of 15 years to control year
        });

      this.$(this._elRef.nativeElement)
        .find("#schedule")
        .pickadate("picker")
        .set("select", this.note.ScheduleTime);

      if(tinyMCE.execCommand('mceRemoveEditor', false, this.editContentId)) {
        tinymce.init({
          selector: "#" + this.editContentId,
          height: 500,
          plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor'
          ],
          toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons'
        });
      }
      
      tinyMCE.get(this.editContentId).setContent(this.note.Content);

    }, 0);
    this.isEditable = true;
  }

  public submit() {
    let scheduleText = this.$(this._elRef.nativeElement)
      .find("#schedule").val();
    // Creating a date based on the pickdate element selection or 
    // the default current creation time.
    let scheduleTime: number;
    if (scheduleText) {
      scheduleTime = new Date(scheduleText).getTime();
    } else {
      scheduleTime = new Date().getTime();
    }
    this.note.ScheduleTime = scheduleTime;

    // Retrieving the content contained into tinymce.
    let content = tinyMCE.get(this.editContentId).getContent();
    this.note.Content = content;

    this.cloneNote();
    this.onEditNote.emit(this.note);

    // Parsing epoch time to human readable value.
    let scheduleDate = new Date(this.note.ScheduleTime);
    this.scheduleTimeString = scheduleDate.toDateString();
    this.evaluateScheduleTime(scheduleDate);

    // Save the changes on UI and close the editing form.
    this.isEditable = false; 
  }

  public resetChanges() {
    this.note.Title = this._backupNote.Title;
    this.note.Category = this._backupNote.Category;
    this.note.Priority = this._backupNote.Priority;
    this.note.Content = this._backupNote.Content;
    this.note.OwnerId = this._backupNote.OwnerId;
    this.note.ScheduleTime = this._backupNote.ScheduleTime;
    this.note.Id = this._backupNote.Id;
    // Parsing epoch time to human readable value.
    let scheduleTime = new Date(this.note.ScheduleTime);
    this.scheduleTimeString = scheduleTime.toDateString();
    // Restarting datepicker value.
    this.$(this._elRef.nativeElement)
      .find("#schedule")
      .pickadate("picker")
      .set("select", this.note.ScheduleTime);
  }

  public cancelEditMode() {
    this.resetChanges();
    this.isEditable = false;
  }

  public addAnchors (content: string) {
    //return this._autoLinker.setAnchors(content);
    return content;
  }
}