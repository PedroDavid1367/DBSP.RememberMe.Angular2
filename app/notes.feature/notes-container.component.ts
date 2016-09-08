import { Component, OnInit, ElementRef, Inject, OnChanges,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: "notes-container",
  template: `
  <notes-add-item *ngIf="isAddNoteSectionEnabled"
                  (onAddNote)="handleAddNoteEvent($event)">
  </notes-add-item>
  
  <notes-pagination [noteCount]="_noteCount"
                    (onPageClicked)="getNotesWithSkip($event)">
  </notes-pagination>

  <notes-list [notes]="_notes"
              (onDeleteNote)="openDeleteNoteConfirmation($event)"
              (onEditNote)="editNote($event)">
  </notes-list>

  <!-- Used for delete confirmation -->
  <div id="deleteConfirmationModal" class="modal">
    <div class="modal-content">
      <h4>Delete confirmation</h4>
      <p>The note with title: {{ _noteToDelete.Title }} will be deleted</p>
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
export class NotesContainerComponent implements OnInit, OnChanges {

  @Input() public isAddNoteSectionEnabled: boolean;
  @Input() private searchString: string;
  @Output() private onCloseAddNoteSection: EventEmitter<boolean>;
  public _notes: Note[];
  public _noteToDelete: Note;
  private _isAddNoteSectionDisabled: boolean;
  public _noteCount: number;

  private _notesAddItemEnabled: boolean;

  constructor(private _notesService: NotesService,
    private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onCloseAddNoteSection = new EventEmitter<boolean>();
    this._noteToDelete = new Note("", "", "", "", "");
    this._isAddNoteSectionDisabled = false;
    this._noteCount = 0;
  }

  public ngOnInit () {
    this.getNotesCount();
    //this.getNotes();
  }

  // ngOnChanges manage if a filtering has been made.
  public ngOnChanges () {
    // Controlling to not trigger on first ngOnChanges call.
    if (this.searchString !== "") {
      console.log(this.searchString);
    }
  }

  private getNotesCount() {
    this._notesService
      .getNotesCount()
      .subscribe(res => {
        this._noteCount = res;
        // TODO: Subscribe to error and display it.
      });
  }
  
  private getNotesWithSkip(skip: number) {
    this._notesService
      .getNotesWithSkip(skip)
      .subscribe(res => {
        this._notes = res;
        // TODO: Subscribe to error and display it.
      });
  }

  // TODO: handle res.value and res["@odata.count"] on NotesService.
  // private getNotes() {
  //   this._notesService
  //     .getNotes()
  //     .subscribe(res => {
  //       this._notes = res.value;
  //       this._noteCount = res["@odata.count"];
  //       // TODO: Subscribe to error and display it.
  //     });
  // }
 
  private handleAddNoteEvent(addNoteArgs: AddNoteArgs) {
    // Send event to notes-home component 
    if (addNoteArgs.submitted || addNoteArgs.canceled) {
      this.onCloseAddNoteSection.emit(this._isAddNoteSectionDisabled);
    }

    // Adding to API.
    if (addNoteArgs.note) {
      this._notesService
      .addNote(addNoteArgs.note)
      .subscribe(note => {
        this._notes.unshift(note);
        // TODO: Subscribe to error and display it.
      });
    }
  }


  public openDeleteNoteConfirmation(note: Note) {
    this._noteToDelete = note;
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").openModal();
  }

  public deleteNote() {
    // Deleting from API.
    this._notesService
      .deleteNote(this._noteToDelete)
      .subscribe(res => {
        console.log("The result of deleteNote is:");
        console.log(res);
        // TODO: Subscribe to error and display it.
      });

    // Deleting from UI. 
    console.log(this._noteToDelete);
    let indexToDelete;
    for (let index in this._notes) {
      if (this._notes[index].Id === this._noteToDelete.Id) {
        indexToDelete = index;
        break;
      }
    }
    this._notes.splice(indexToDelete, 1);
    console.log(this._notes);
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
