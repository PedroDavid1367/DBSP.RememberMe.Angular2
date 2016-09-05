import { Component, Input, Output, EventEmitter,
  ElementRef, Inject, OnInit }  from "@angular/core";
import { Note }                                    from "./note.model";

@Component({
  selector: 'notes-add-item',
  styles: [`
  .ng-valid[required] {
    border-bottom: 1px solid #42A948; /* green */
  }

  .ng-invalid {
    border-bottom: 1px solid #a94442; /* red */
  }
  `],
  template: require("./notes-add-item.component.html")
})
export class NotesAddItemComponent implements OnInit {

  @Output() public onAddNote: EventEmitter<{}> = new EventEmitter<{}>(); 

  private _model: Note = new Note("", "", "", "", "");
  private _submitted = false;

  public ngOnInit() {
  }

  submit() {
    this._submitted = true;
    let addNoteArgs = {
      submitted: this._submitted,
      canceled: false,
      note: this._model
    }
    
    this.onAddNote.emit(addNoteArgs);
  }

  cancel() {
    let addNoteArgs = {
      submitted: false,
      canceled: true,
      note: null
    }
    
    this.onAddNote.emit(addNoteArgs);
  }

  resetNote() {
    this._model = new Note("", "", "", "", "");
  }

  private get diagnostic(): string {
    return JSON.stringify(this._model);
  }
}
