import { Component, OnInit, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: "notes-filter-title",
  template: `
  <div class="row">
    <div class="input-field col m12">
      <input id="title" type="text" class="" required
             [(ngModel)]="searchString" name="title"
             #title="ngModel">  
      <label for="title"> 
        Filter by Title
      </label>
    </div>
    <div class="input-field col m12">
      <input class="btn-flat" [disabled]="!title.valid"
              type="button" value="Search" 
              (click)="sendSearchString(title.value)" />
      <input class="btn-flat" [disabled]="!title.valid"
              type="button" value="Reset" 
              (click)="closeNotesFilterSection()" />
      <br />title.valid = {{ title.valid }}
      <br />title.value = {{ title.value }}
      <br />searchString = {{ searchString }}
    </div>
  </div>

  <!--<div class="input-field col s12">
    <input id="title" type="text" class="validate" required
            [(ngModel)]="_model.Title" name="title"
            #title="ngModel">  
    <label for="title" data-error="invalid" data-success="valid">Title</label>
    <div [hidden]="title.valid" 
          class="alert alert-danger">
      <sup style="color:red;">Title is required</sup>
    </div>
  </div>-->
  `
})
export class NotesFilterTitleComponent implements OnInit {
  
  @Output() private onSendSearchString: EventEmitter<string>;
  public searchString: string;

  public constructor () {
    this.onSendSearchString = new EventEmitter<string>();
    this.searchString = "";
  }

  public ngOnInit () {
  }

  public sendSearchString (searchString: string) {
    this.onSendSearchString.emit(searchString);
  }
}
