import { Component, Input, Output, EventEmitter,
  ElementRef, Inject, OnInit }                     from "@angular/core";
import { Note }                                    from "./note.model";

declare let tinymce: any;
declare let tinyMCE: any;

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

  // onAddNote event actually emits an AddNoteArgs that represents
  // either a note submission or a note cancelation. 
  @Output() private onAddNote: EventEmitter<AddNoteArgs>; 
  public model: Note;

  public constructor (private _elRef: ElementRef, 
    @Inject("$") private $: any) {

    this.onAddNote = new EventEmitter<AddNoteArgs>();
  }

  public ngOnInit () {
    this.model = new Note("", "", "", "", "");
    if(tinyMCE.execCommand("mceRemoveEditor", false, "content")) {
      tinymce.init({
        selector: "#content",
        height: 500,
        plugins: [
          "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
          "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
          "save table contextmenu directionality emoticons template paste textcolor"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons"
      });
    }
    this.$(this._elRef.nativeElement)
      .find("#schedule").pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15     // Creates a dropdown of 15 years to control year
      });
  }

  public submit () {
    let scheduleText = this.$(this._elRef.nativeElement)
      .find("#schedule").val();
    // Creating a date based on the pickdate element selection or 
    // the default current creation time.
    let scheduleTime: number;
    if (scheduleText) {
      scheduleTime = new Date(scheduleText).getTime();
    } else {
      scheduleTime = new Date().getTime();
    }
    this.model.ScheduleTime = scheduleTime;
    // Retrieving the content contained into tinymce.
    let content = tinyMCE.get("content").getContent();
    this.model.Content = content;
    let addNoteArgs = new AddNoteArgs();
    addNoteArgs.submitted = true,
    addNoteArgs.canceled = false,
    addNoteArgs.note = this.model
    this.onAddNote.emit(addNoteArgs);
  }

  public cancel () {
    let addNoteArgs = new AddNoteArgs();
    addNoteArgs.submitted = false,
    addNoteArgs.canceled = true,
    addNoteArgs.note = null
    this.onAddNote.emit(addNoteArgs);
  }

  public restartNote () {
    this.model = new Note("", "", "", "", "");
    this.$(this._elRef.nativeElement)
      .find("#schedule").pickadate("picker").clear();
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

