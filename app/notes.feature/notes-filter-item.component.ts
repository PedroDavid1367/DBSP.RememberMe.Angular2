import { Component, OnInit, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: "notes-filter-item",
  template: `
  <div class="row">
    <div class="input-field col m12">
      <input id="item" type="text" class="" required
             [(ngModel)]="searchString" name="item"
             #item="ngModel">  
      <label for="item"> 
        Filter by {{ filterType }}
      </label>
    </div>
    <div class="input-field col m12">
      <input class="btn-flat" [disabled]="!item.valid"
              type="button" value="Search" 
              (click)="sendSearchString(item.value)" />
      <input class="btn-flat" [disabled]="!item.valid"
              type="button" value="Reset" 
              (click)="reset()" />
    </div>
  </div>
  `
})
export class NotesFilterItemComponent implements OnInit {
  
  @Input() public filterType: string;
  @Output() private onSendSearchString: EventEmitter<SearchStringEventArgs>;
  public searchString: string;

  public constructor () {
    this.onSendSearchString = new EventEmitter<SearchStringEventArgs>();
    this.searchString = "";
  }

  public ngOnInit () {
  }

  public sendSearchString (searchString: string) {
    let searchStringEventArgs = new SearchStringEventArgs();
    searchStringEventArgs.searchString = searchString;
    searchStringEventArgs.filterType = this.filterType;
    this.onSendSearchString.emit(searchStringEventArgs);
  }

  public reset () {
    this.searchString = "";
  }
}

export class SearchStringEventArgs {
  public searchString: string;
  public filterType: string;
}
