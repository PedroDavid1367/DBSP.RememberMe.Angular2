import { Component, OnInit, ElementRef, Inject, OnChanges,
  Input, Output, EventEmitter }                    from "@angular/core";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";
import { NotesService }                            from "./notes.service";

@Component({
  selector: "notes-detail-container",
  template: `
  <notes-add-item *ngIf="addNoteSectionEnabled"
                  (onAddNote)="handleAddNoteEvent($event)">
  </notes-add-item>

  <notes-detail *ngIf="note.Title" [note]="note"
                (onDeleteNote)="openDeleteNoteConfirmation($event)"
                (onEditNote)="editNote($event)">
  </notes-detail>

  <!-- Used for delete confirmation -->
  <div id="deleteConfirmationModal" class="modal">
    <div class="modal-content">
      <h4>Delete confirmation</h4>
      <p *ngIf="noteToDelete">The note with title: {{ noteToDelete.Title }} will be deleted</p>
    </div>
    <div class="modal-footer">
      <a (click)="closeDeleteConfirmationMessage()"
         class="modal-action modal-close waves-effect waves-green btn btn-flat">Cancel</a>
      <a (click)="deleteNote()"
         class="modal-action modal-close waves-effect waves-green btn btn-flat">Yes</a>
    </div>
  </div>
  `
})
export class NotesDetailContainerComponent implements OnInit, OnChanges {

  @Input() public note: Note;
  @Input() public isAddNoteSectionEnabled: boolean;
  @Output() private onDeleteNote: EventEmitter<Note>;
  @Output() private onAddNote: EventEmitter<Note>;
  public notesDetailEnabled: boolean;
  public addNoteSectionEnabled: boolean;
  public noteToDelete: Note;

  constructor(private _notesService: NotesService,
    private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onAddNote = new EventEmitter<Note>();
    this.onDeleteNote = new EventEmitter<Note>();
  }

  public ngOnInit () {
    // The default is the add notes view opened when the app is started.
    this.addNoteSectionEnabled = true;
  }

  public ngOnChanges () {
    this.addNoteSectionEnabled = this.isAddNoteSectionEnabled;
  }

  public handleAddNoteEvent(addNoteArgs: AddNoteArgs) { 
    if (addNoteArgs.canceled) {
      this.addNoteSectionEnabled = false;
    }
    // Adding to API.
    if (addNoteArgs.note) {
      this._notesService
      .addNote(addNoteArgs.note)
      .subscribe(note => {
        // Sending to Home component so it knows what to do for adding to UI.
        this.onAddNote.emit(note);
        // TODO: Subscribe to error and display it.
      });
    }
  }

  private openDeleteNoteConfirmation(note: Note) {
    this.noteToDelete = note;
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").openModal();
  }

  public closeDeleteConfirmationMessage() {
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").closeModal();
  }

  public deleteNote() {
    // Deleting from API.
    this._notesService
      .deleteNote(this.noteToDelete)
      .subscribe(res => {
        console.log("The result of deleteNote is:");
        console.log(res);
        // TODO: Subscribe to error and display it.
      });
    // Sending to home component so it knows how to delete from UI.
    this.onDeleteNote.emit(this.noteToDelete);
  }
}