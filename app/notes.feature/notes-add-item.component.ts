import { Component, Input, Output, EventEmitter,
  ElementRef, Inject, OnInit }                     from "@angular/core";
import { Note }                                    from "./note.model";

@Component({
  selector: 'notes-add-item',
  styles: [`
  .ng-valid[required] {
    border-bottom: 1px solid #42A948; /* green */
  }

  #schedule.ng-touched[required] {
    border-bottom: 1px solid #42A948; /* green */
  }

  .ng-invalid {
    border-bottom: 1px solid #a94442; /* red */
  }
  `],
  template: require("./notes-add-item.component.html")
})
export class NotesAddItemComponent implements OnInit {

  // onAddNote event actually emits an AddNoteArgs that represents
  // either a note submission or a note cancelation. 
  @Output() private onAddNote: EventEmitter<AddNoteArgs>; 
  public _model: Note;
  public eg = { schedule: "" };

  public constructor ( private _elRef: ElementRef, 
    @Inject("$") private $: any) {

    this.onAddNote = new EventEmitter<AddNoteArgs>();
  }

  public ngOnInit() {
    this._model = new Note("", "", "", "", "");

  //   $('.datepicker').pickadate({
  //   selectMonths: true, // Creates a dropdown to control month
  //   selectYears: 15 // Creates a dropdown of 15 years to control year
  // });

    this.$(this._elRef.nativeElement)
      .find("#schedule").pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
  }

  public submit() {
    let addNoteArgs = new AddNoteArgs();
    addNoteArgs.submitted = true,
    addNoteArgs.canceled = false,
    addNoteArgs.note = this._model
    
    this.onAddNote.emit(addNoteArgs);
  }

  public cancel() {
    let addNoteArgs = new AddNoteArgs();
    addNoteArgs.submitted = false,
    addNoteArgs.canceled = true,
    addNoteArgs.note = null
    
    this.onAddNote.emit(addNoteArgs);
  }

  public resetNote() {
    this._model = new Note("", "", "", "", "");
  }

  public get diagnostic(): string {
    return JSON.stringify(this._model);
  }
}

interface IAddNoteArgs {
  submitted: boolean,
  canceled: boolean,
  note: Note 
}

export class AddNoteArgs implements IAddNoteArgs {
  public submitted: boolean;
  public canceled: boolean;
  public note: Note; 
}

