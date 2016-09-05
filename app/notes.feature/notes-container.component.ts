import { Component, OnInit, ElementRef, Inject,
  Input, Output, OnChanges, EventEmitter }         from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { NotesItemComponent }                      from "./notes-item.component";

@Component({
  selector: 'notes-container',
  template: `
  <notes-add-item *ngIf="isAddNoteEnabled"
                  (onAddNote)="handleAddNote($event)">
  </notes-add-item>
  <notes-list [notes]="_notes"
              (onDeleteNote)="deleteNote($event)"
              (onEditNote)="editNote($event)">
  </notes-list>

  <!-- Used for delete confirmation -->
  <div id="deleteConfirmationModal" class="modal">
    <div class="modal-content">
      <h4>Delete confirmation</h4>
      <p>The note with title: {{ _noteToDeleteTitle }} will be deleted</p>
    </div>
    <div class="modal-footer">
      <a (click)="closeDeleteConfirmationMessage()"
         class="modal-action modal-close waves-effect waves-green btn btn-flat">Cancel</a>
      <a (click)="delete()"
         class="modal-action modal-close waves-effect waves-green btn btn-flat">Yes</a>
    </div>
  </div>
  `
})
export class NotesContainerComponent implements OnInit, OnChanges {

  @Input() public isAddNoteEnabled: boolean;
  @Output() public onAddNoteComponentClosed = new EventEmitter<boolean>();
  public _notes: Note[];
  //public _notes: any;
  private _noteToDelete: NotesItemComponent;
  private _noteToDeleteTitle: string;

  private _notesAddItemEnabled: boolean;

  constructor(private _notesService: NotesService,
    private _elRef: ElementRef,
    @Inject("$") private $: any) {
  }

  ngOnInit() {
    this.getNotes();
  }

  ngOnChanges() {
    // this._notesAddItemEnabled = this.isAddNoteEnabled
    // console.log(`_notesAddItemEnabled: ${this._notesAddItemEnabled} - @Input() isAddNoteEnabled: ${this.isAddNoteEnabled}`);
  }

  private getNotes() {
    this._notesService
      .getNotes()
      .subscribe(notes => {
        this._notes = notes;
        // TODO: Subscribe to error and display it.
      });
  }

  // TODO: create addNoteArgs interface. 
  private handleAddNote(addNoteArgs: any) {
    // Closing Add Note form.
    if (addNoteArgs.submitted || addNoteArgs.canceled) {
      // this._notesAddItemEnabled = false;
      // this.isAddNoteEnabled = false;
      this.onAddNoteComponentClosed.emit(false);
    }

    // Adding to API.
    if (addNoteArgs.note) {
      this._notesService
      .addNote(addNoteArgs.note)
      .subscribe(note => {
        this._notes.push(note);
        // TODO: Subscribe to error and display it.
      });
    }
  }

  public deleteNote(noteComponent: NotesItemComponent) {
    this._noteToDelete = noteComponent;
    this._noteToDeleteTitle = noteComponent.note.Title;
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").openModal();
  }

  public delete() {
    // Deleting from API.
    this._notesService
      .deleteNote(this._noteToDelete.note)
      .subscribe(res => {
        console.log("The result of deleteNote is:");
        console.log(res);
        // TODO: Subscribe to error and display it.
      });

    // Deleting from UI. 
    console.log(this._noteToDelete);
    let indexToDelete;
    for (let index in this._notes) {
      if (this._notes[index].Id === this._noteToDelete.note.Id) {
        indexToDelete = index;
        break;
      }
    }
    this._notes.splice(indexToDelete, 1);
    console.log(this._notes);
  }

  public editNote(noteComponent: NotesItemComponent) {
    // Editing from API, UI has been already updated.
    this._notesService
      .editNote(noteComponent.note)
      .subscribe(res => {
        console.log("The result of editNote is:");
        console.log(res);
        // TODO: Subscribe to error and display it.
      });
  }

  public closeDeleteConfirmationMessage() {
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").closeModal();
  }
}
