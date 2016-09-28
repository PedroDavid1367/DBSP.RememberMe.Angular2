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

  <notes-item-list [notes]="_notes"
                   (onNoteSelected)="sendNoteToHomeComponent($event)">
  </notes-item-list>
  `
})
export class NotesItemContainerComponent implements OnInit, OnChanges {

  @Input() private searchString: string;
  @Input() private filterType: string;
  @Input() public noteToAdd: Note;
  @Input() public noteToDelete: Note;
  @Output() private onNoteSelected: EventEmitter<Note>;
  public _notes: Note[];
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
      this._notesService
        .getNotesCountForFilter(this.searchString, this.filterType)
        .subscribe(res => {
          this.noteCount = res;
          // TODO: Subscribe to error and display it.
      });
    }

    if (this.noteToAdd) {
      this._notes.unshift(this.noteToAdd);
    }

    if (this.noteToDelete) {
      // Deleting from UI. 
      let indexToDelete;
      for (let index in this._notes) {
        if (this._notes[index].Id === this.noteToDelete.Id) {
          indexToDelete = index;
          break;
        }
      }
      this._notes.splice(indexToDelete, 1);
    }
  }

  private getNotesCount() {
    this._notesService
      .getNotesCount()
      .subscribe(res => {
        this.noteCount = res;
        // TODO: Subscribe to error and display it.
      });
  }
  
  private getNotesWithSkipAndFilter(pageClickedEventArgs: PageClickedEventArgs) {
    this._notesService
      .getNotesWithSkipAndFilter(pageClickedEventArgs)
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
  //       this.noteCount = res["@odata.count"];
  //       // TODO: Subscribe to error and display it.
  //     });
  // }
 
  private handleAddNoteEvent(addNoteArgs: AddNoteArgs) {
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
}
