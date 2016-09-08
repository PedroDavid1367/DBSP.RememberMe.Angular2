import { Component, OnInit, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: "notes-filter-item",
  styles: [`
  .btn-flat {
    width: 100px;
  }
  `],
  template: `
  <div class="row">
    <div class="input-field col s12 m12">
      <input id="item" type="text" class="" required
             [(ngModel)]="searchString" name="item"
             #item="ngModel">  
      <label for="item"> 
        Filter by {{ filterType }}
      </label>
    </div>
    <div class="center-btn col s12 m12">
      <input type="button" class="btn-flat" value="Search"
             [disabled]="!item.valid" 
             (click)="sendSearchString(item.value)" />    
      <input type="button" class="btn-flat" value="Reset"
             [disabled]="!item.valid" 
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
    this.reset();
  }

  public reset () {
    this.searchString = "";
  }
}

export class SearchStringEventArgs {
  public searchString: string;
  public filterType: string;
}
