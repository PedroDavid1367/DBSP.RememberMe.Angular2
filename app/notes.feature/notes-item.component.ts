import { Component, Input, Output, EventEmitter, OnDestroy, AfterViewChecked,
  ElementRef, Inject, OnInit }                     from "@angular/core";
//import { AutoLinkerService }                       from "../common.services/auto-linker.service";
import { Note }                                    from "./note.model";
import { Router }                                  from "@angular/router";

declare let tinymce: any;
declare let tinyMCE: any;

@Component({
  selector: "notes-item",
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
  <div class="card lime lighten-5" (click)="view()">
    <div class="card-content">
      <p>Title: {{ note.Title }}</p>  
      <p>Category: {{ note.Category }}</p>
      <p>Priority: {{ note.Priority }}</p>
      <p>Schedule Time: 
        <span [ngStyle]="{'color': scheduleColor}">
          <strong> {{ scheduleTimeString }}</strong>
        </span>
      </p>
    </div> 
  </div>
  `
})
export class NotesItemComponent implements OnInit, OnDestroy {

  @Input() public note: Note;
  @Output() private onDeleteNote: EventEmitter<Note>;
  @Output() private onEditNote: EventEmitter<Note>;
  public isEditable: boolean = false;
  private _backupNote: Note;
  public scheduleTimeString: string;
  public scheduleColor: string;
  private _scheduleTimeEvaluator: any;
  private _scheduleTimeSpanTime: number;

  public constructor (private _elRef: ElementRef,
    //private _autoLinker: AutoLinkerService, 
    private _router: Router,
    @Inject("$") private $: any) {

    this.onDeleteNote = new EventEmitter<Note>();
    this.onEditNote = new EventEmitter<Note>();
    this._scheduleTimeSpanTime = 21600000;  // 6 hours
  }

  public get editContentId () {
    return "content-" + this.note.Id;
  }

  public ngOnInit () {

    this.cloneNote();
    // Adding default values to this.scheduleColor.
    // this.scheduleColor = "seagreen";
    // Parsing epoch time to human readable value.
    let scheduleTime = new Date(this.note.ScheduleTime);
    this.scheduleTimeString = scheduleTime.toDateString();
    // Evaluating if the schedule time is on time or near complition.
    this.evaluateScheduleTime(scheduleTime);
    // Firing up the scheduler
    this._scheduleTimeEvaluator = setInterval(() => {
      this.evaluateScheduleTime(scheduleTime);
    }, this._scheduleTimeSpanTime); 
  }

  private evaluateScheduleTime (scheduleTime: Date) {
    this.scheduleColor = "seagreen";
    let bufferTime = 2; // Default 2 days.
    let actualTime = new Date();
    if (actualTime.getDate() + bufferTime >= scheduleTime.getDate()) {
      this.scheduleColor = "tomato";
    }
  }

  // I'm not sure about this implementation (it's fired too many times).
  // public ngAfterViewChecked () {
  //   this.$(this._elRef.nativeElement)
  //     .find("#schedule").pickadate({
  //       selectMonths: true, // Creates a dropdown to control month
  //       selectYears: 15     // Creates a dropdown of 15 years to control year
  //     });
  // }

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

  public delete () {
    this.onDeleteNote.emit(this.note);
  }

  // A way better implementation than using the previous 
  // implementation with ngAfterViewChecked.
  public edit () {
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
          //selector: ".edit-note-content"
          selector: "#" + this.editContentId,
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

  public submit () {
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

  public resetChanges () {
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

  public view () {
    this._router.navigate(["/notes", this.note.Id]);
  }

  public cancelEditMode () {
    this.resetChanges();
    this.isEditable = false;
  }

  public addAnchors (content: string) {
    //return this._autoLinker.setAnchors(content);
    return content;
  }
}
