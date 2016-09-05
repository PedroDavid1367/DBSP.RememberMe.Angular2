import { Component, OnInit, ElementRef, Inject,
  Input }                                          from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { NotesItemComponent }                      from "./notes-item.component";

@Component({
  selector: 'notes-container',
  template: `
  <notes-add-item *ngIf="isAddNoteEnabled"
                  (addNoteEmitter)="addNote($event)">
  </notes-add-item>
  <notes-list [notes]="_notes"
              (onDeleteNote)="deleteNote($event)">
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
export class NotesContainerComponent implements OnInit {

  @Input() public isAddNoteEnabled: boolean;
  public _notes: Note[];
  //public _notes: any;
  private _noteToDelete: NotesItemComponent;
  private _noteToDeleteTitle: string;

  constructor(private _notesService: NotesService,
    private _elRef: ElementRef,
    @Inject("$") private $: any) {
  }

  ngOnInit() {
    this.getNotes();
  }

  private getNotes() {
    this._notesService
      .getNotes()
      .subscribe(notes => {
        this._notes = notes;
        // TODO: Subscribe to error and display it.
      });
  }

  private addNote(note: Note) {
    this._notesService
      .addNote(note)
      .subscribe(note => {
        this._notes.push(note);
        // TODO: Subscribe to error and display it.
      });
  }

  public deleteNote(noteComponent: NotesItemComponent) {
    this._noteToDelete = noteComponent;
    this._noteToDeleteTitle = noteComponent.note.Title;
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").openModal();
  }

  public delete() {
    //Deleting from API.
    this._notesService
      .deleteNote(this._noteToDelete.note)
      .subscribe(res => {
        console.log("The result of deleteNote is:");
        console.log(res);
        // TODO: Subscribe to error and display it.
      });

    //Deleting from UI. 
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

  public closeDeleteConfirmationMessage() {
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").closeModal();
  }
}
