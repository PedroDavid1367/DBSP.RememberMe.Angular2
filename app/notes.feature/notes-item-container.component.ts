import { Component, OnInit, ElementRef, Inject, OnChanges,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";
import { PageClickedEventArgs }                    from "./notes-pagination.component";

@Component({
  selector: "notes-item-container",
  template: `
  <notes-pagination [noteCount]="noteCount"
                    [searchString]="searchString"
                    [filterType]="filterType"
                    (onPageClicked)="getNotesWithSkipAndFilter($event)">
  </notes-pagination>

  <notes-item-list [notes]="notes"
                   (onNoteSelected)="sendNoteToHomeComponent($event)">
  </notes-item-list>
  `
})
export class NotesItemContainerComponent implements OnInit, OnChanges {

  @Input() public searchString: string;
  @Input() public filterType: string;
  @Input() public noteToAdd: Note;
  @Input() public noteToDelete: Note;
  @Input() public noteToEdit: Note;
  @Output() private onNoteSelected: EventEmitter<Note>;
  public notes: Note[];
  private _isAddNoteSectionDisabled: boolean;
  public noteCount: number;

  private _notesAddItemEnabled: boolean;

  constructor(private _notesService: NotesService,
    private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onNoteSelected = new EventEmitter<Note>();
    this._isAddNoteSectionDisabled = false;
    this.noteCount = 0;
  }

  public ngOnInit () {
    this.getNotesCount();
    //this.getNotes();
  }

  public sendNoteToHomeComponent (note: Note) {
    this.onNoteSelected.emit(note);
  }

  // ngOnChanges manage if a filtering has been made.
  public ngOnChanges () {
    // Controlling to not trigger on first ngOnChanges call.
    if (this.searchString !== undefined) {
      this.searchStringIsDefined(this.searchString, this.filterType);
    }
    if (this.noteToAdd) {
      this.addNoteToUI(this.noteToAdd);
    }
    if (this.noteToDelete) {
      this.deleteNoteFromUI(this.noteToDelete);
    }
    if (this.noteToEdit) {
      this.updateNoteFromUI(this.noteToEdit);
    }
  }

  private searchStringIsDefined (searchString: string, filterType: string) {
    this._notesService
      .getNotesCountForFilter(searchString, filterType)
      .subscribe(res => {
        this.noteCount = res;
        // TODO: Subscribe to error and display it.
      });
  }

  private addNoteToUI (noteToAdd: Note) {
     this.notes.unshift(noteToAdd);
  }

  private deleteNoteFromUI (noteToDelete: Note) {
    // Deleting from UI. 
      let indexToDelete;
      for (let index in this.notes) {
        if (this.notes[index].Id === noteToDelete.Id) {
          indexToDelete = index;
          break;
        }
      }
      this.notes.splice(indexToDelete, 1);
  }

  private updateNoteFromUI (noteToEdit: Note) {
    // Updating from UI. 
      let indexToUpdate;
      for (let index in this.notes) {
        if (this.notes[index].Id === noteToEdit.Id) {
          indexToUpdate = index;
          break;
        }
      }
      this.notes.splice(indexToUpdate, 1, noteToEdit);
  }

  private getNotesCount () {
    this._notesService
      .getNotesCount()
      .subscribe(res => {
        this.noteCount = res;
        // TODO: Subscribe to error and display it.
      });
  }
  
  private getNotesWithSkipAndFilter (pageClickedEventArgs: PageClickedEventArgs) {
    this._notesService
      .getNotesWithSkipAndFilter(pageClickedEventArgs)
      .subscribe(res => {
        this.notes = res;
        // TODO: Subscribe to error and display it.
      });
  }
 
  private handleAddNoteEvent (addNoteArgs: AddNoteArgs) {
    // Adding to API.
    if (addNoteArgs.note) {
      this._notesService
      .addNote(addNoteArgs.note)
      .subscribe(note => {
        this.notes.unshift(note);
        // TODO: Subscribe to error and display it.
      });
    }
  }

  public editNote (note: Note) {
    // Editing from API, UI has been already updated.
    this._notesService
      .editNote(note)
      .subscribe(res => {
        console.log("The result of editNote is:");
        console.log(res);
        // TODO: Subscribe to error and display it.
      });
  }
}
