import { Component, OnInit, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";
import { SearchStringEventArgs }                   from "./notes-filter-item.component";

@Component({
  selector: "notes-filter-container",
  styles: [`
  div.blue-grey {
    padding: 20px;
  }
  `],
  template: `
  <div class="blue-grey lighten-4 z-depth-1">
    <notes-filter-item [filterType]="'Title'"
                       (onSendSearchString)="sendSearchString($event)">
    </notes-filter-item>

    <br />

    <notes-filter-item [filterType]="'Category'"
                       (onSendSearchString)="sendSearchString($event)">
    </notes-filter-item>

    <br />

    <notes-filter-item [filterType]="'Priority'"
                       (onSendSearchString)="sendSearchString($event)">
    </notes-filter-item>

    <br />

    <notes-filter-item [filterType]="'Content'"
                       (onSendSearchString)="sendSearchString($event)">
    </notes-filter-item>

    <br />
    
    <div class="row">
      <div class="input-field col s12">
        <input class="btn blue-grey lighten-2 right" type="button" value="Close" 
               (click)="closeNotesFilterSection()" />
      </div>
    </div>

    <br />
  </div> 
  `
})
export class NotesFilterContainerComponent implements OnInit {

  @Output() private onCloseFilterNoteSection: EventEmitter<boolean>;
  @Output() private onSendSearchString: EventEmitter<SearchStringEventArgs>;
  private _isFilterNoteSectionEnabled: boolean;

  public constructor () {
    this.onCloseFilterNoteSection = new EventEmitter<boolean>();
    this.onSendSearchString = new EventEmitter<SearchStringEventArgs>();
    this._isFilterNoteSectionEnabled = false;
  }

  public ngOnInit () {

  }

  public closeNotesFilterSection () {
    this.onCloseFilterNoteSection.emit(this._isFilterNoteSectionEnabled);
  }

  public sendSearchString (searchStringEventArgs: SearchStringEventArgs) {
    this.onSendSearchString.emit(searchStringEventArgs);
  }
}
