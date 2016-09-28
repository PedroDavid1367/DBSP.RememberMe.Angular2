import { Component, OnInit, ElementRef, Inject, OnChanges,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { Router, ActivatedRoute, Params }          from "@angular/router";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: "notes-detail-container",
  template: `
  <notes-add-item *ngIf="isAddNoteSectionEnabled"
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
      <p>The note with title: {{ note.Title }} will be deleted</p>
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
export class NotesDetailContainerComponent {

  @Input() public note: Note;
  @Input() public isAddNoteSectionEnabled: boolean;
  @Output() private onAddNote: EventEmitter<AddNoteArgs>;

  public constructor(private _notesService: NotesService,
    private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onAddNote = new EventEmitter<AddNoteArgs>();
  }

  public ngOnInit () {
  }

  public ngOnChanges () {
  }

  public openDeleteNoteConfirmation(note: Note) {
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").openModal();
  }

  public closeDeleteConfirmationMessage() {
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").closeModal();
  }

  public deleteNote() {
  }

  public handleAddNoteEvent(addNoteArgs: AddNoteArgs) {
    this.onAddNote.emit(addNoteArgs);
  }
}