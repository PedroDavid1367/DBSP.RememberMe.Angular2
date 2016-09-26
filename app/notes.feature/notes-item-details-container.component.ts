import { Component, OnInit, ElementRef, Inject, OnChanges,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { NotesSharedItemsDateilsService }          from "./notes-shared-items-details.service";
import { Router, ActivatedRoute, Params }          from "@angular/router";

@Component({
  selector: "notes-item-details-container",
  template: `
  <notes-item-details [note]="activeNote"
                      (onDeleteNote)="openDeleteNoteConfirmation($event)"
                      (onEditNote)="editNote($event)">
  </notes-item-details>

  <!-- Used for delete confirmation -->
  <div id="deleteConfirmationModal" class="modal">
    <div class="modal-content">
      <h4>Delete confirmation</h4>
      <p>The note with title: {{ noteToDelete.Title }} will be deleted</p>
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
export class NotesItemDetailsContainerComponent {

  public activeNote: Note;
  public notes: Note[];
  public noteToDelete: Note;

  public constructor(private _notesService: NotesService,
    private _activatedRoute: ActivatedRoute,
    private _elRef: ElementRef,
    @Inject("$") private $: any,
    private _router: Router,
    private _notesSharedItemsDateils: NotesSharedItemsDateilsService) {

    this.notes = this._notesSharedItemsDateils.notes;
    this.activeNote = new Note("", "", "", "", "");
    this.noteToDelete = new Note("", "", "", "", "");
  }

  public ngOnInit () {
    this._activatedRoute.params.forEach((params: Params) => {
      let id = +params["id"];
      this._notesService
        .getNote(id)
        .subscribe(note => {
          this.activeNote = note;
        })
    });
  }

  public openDeleteNoteConfirmation(note: Note) {
    this.noteToDelete = note;
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").openModal();
  }

  public deleteNote() {
    // Deleting from API.
    this._notesService
      .deleteNote(this.noteToDelete)
      .subscribe(res => {
        // TODO: Subscribe to error and display it.
      });

    // Deleting the notes item entry. 
    let indexToDelete;
    for (let index in this.notes) {
      if (this.notes[index].Id === this.noteToDelete.Id) {
        indexToDelete = index;
        break;
      }
    }
    this.notes.splice(indexToDelete, 1);

    // Navigating to notes home. 
    //this._router.navigate(["/notes"]);
    this._router.navigate(['../'], { relativeTo: this._activatedRoute });
  }

  public editNote(note: Note) {
    // Editing from API, UI has been already updated.
    this._notesService
      .editNote(note)
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
