import { Component, OnInit, ElementRef, Inject, OnChanges,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { NotesSharedItemsDateilsService }          from "./notes-shared-items-details.service";
import { Router, ActivatedRoute, Params }          from "@angular/router";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: "notes-add-item-container",
  template: `
  <notes-add-item *ngIf="isAddNoteSectionEnabled" 
                  (onAddNote)="handleAddNoteEvent($event)">
  </notes-add-item>
  `
})
export class NotesAddItemContainerComponent {

  public isAddNoteSectionEnabled: boolean;

  private _notesAddItemEnabled: boolean;

  constructor(private _notesService: NotesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _notesSharedItemsDateils: NotesSharedItemsDateilsService) {

    this.isAddNoteSectionEnabled = true;
  }

  private handleAddNoteEvent(addNoteArgs: AddNoteArgs) {
    // Send event to notes-home component 
    if (addNoteArgs.submitted || addNoteArgs.canceled) {
      this.isAddNoteSectionEnabled = false;
    }

    // Adding to API.
    if (addNoteArgs.note) {
      this._notesService
        .addNote(addNoteArgs.note)
        .subscribe(note => {
          this._notesSharedItemsDateils.notes.unshift(note);
          this._router.navigate(["/notes", note.Id]);
          // TODO: Subscribe to error and display it.
        });
    }
  }
}
