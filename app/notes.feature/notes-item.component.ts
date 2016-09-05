import { Component, Input, Output, EventEmitter, 
  OnInit }                                         from "@angular/core";
import { Note }                                    from "./note.model";

@Component({
  selector: 'notes-item',
  styles: [`
  div span {
    color:#263238;
  }  
  div p {
    color:#546e7a;
  }
  .ng-valid[required] {
    border-bottom: 1px solid #42A948; /* green */
  }

  .ng-invalid {
    border-bottom: 1px solid #a94442; /* red */
  }  
  `],
  template: `
  <div *ngIf="!_isEditable" class="card lime lighten-5">
    <div class="card-content">
      <span class="card-title">{{ note.Title }}</span>
      <p>
        {{ note.Content }}    
      </p>
      <br />  
      <p>Category: {{ note.Category }}</p>
      <p>Priority: {{ note.Priority }}</p>
    </div> 
    <div class="card-action blue-grey lighten-1">
      <input type="button" class="btn-flat" style="color:white;" value="Edit" (click)="edit()" />
      <input type="button" class="btn-flat" style="color:white;" value="To reminder" />
      <input type="button" class="btn-flat" style="color:white;" value="Delete" (click)="delete()" />
    </div>
  </div>

  <div *ngIf="_isEditable" class="card lime lighten-5 z-depth-4">
    <div class="card-content row" style="background-color:white;">
      <form class="col s12" (ngSubmit)="submit()" #noteForm="ngForm">
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

        <div class="row">
          <div class="input-field col s12">
            <textarea id="content" class="materialize-textarea"
                      [(ngModel)]="note.Content" name="content"></textarea>
            <label class="active" for="content">Content</label>
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
      </form>
    </div> 
    <div class="card-action blue-grey lighten-1">
      <input class="btn-flat" type="submit" style="color:white;" [disabled]="!noteForm.form.valid" value="Save" />
      <input class="btn-flat" type="button" style="color:white;" value="Reset" (click)="resetChanges()" />
      <input class="btn-flat" type="button" style="color:white;" value="Cancel" (click)="cancelEditMode()" />
    </div>
  </div>
  `
})
export class NotesItemComponent implements OnInit{

  @Input() public note: Note;
  @Output() public onDeleteNote: EventEmitter<NotesItemComponent> = new EventEmitter<NotesItemComponent>();
  @Output() public onEditNote: EventEmitter<NotesItemComponent> = new EventEmitter<NotesItemComponent>();
  private _isEditable: boolean = false;
  private _backupNote: Note;

  ngOnInit() {
    this._backupNote = new Note(
      this.note.Title,
      this.note.Category,
      this.note.Priority,
      this.note.Content,
      this.note.OwnerId,
      this.note.Id
    );
  }

  public delete() {
    this.onDeleteNote.emit(this);
  }

  public edit() {
    this._isEditable = true;
  }

  public submit() {
    // TODO: Send to parent to save in the db.
    this._backupNote = this.note;
    this.onEditNote.emit(this);

    // Save the changes on UI and close the editing form.
    this._isEditable = false; 
  }

  public resetChanges() {
    this.note.Title = this._backupNote.Title;
    this.note.Category = this._backupNote.Category;
    this.note.Priority = this._backupNote.Priority;
    this.note.Content = this._backupNote.Content;
    this.note.OwnerId = this._backupNote.OwnerId;
    this.note.Id = this._backupNote.Id;
  }

  public cancelEditMode() {
    this.resetChanges();
    this._isEditable = false;
  }
}
