import { Component, OnInit, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { SearchStringEventArgs }                   from "./contacts-filter-item.component";

@Component({
  selector: "contacts-filter-container",
  styles: [`
  div.blue-grey {
    padding: 20px;
  }
  `],
  template: `
  <div class="blue-grey lighten-4 z-depth-1">
    <contacts-filter-item [filterType]="'Name'"
                       (onSendSearchString)="sendSearchString($event)">
    </contacts-filter-item>

    <br />

    <contacts-filter-item [filterType]="'Email'"
                       (onSendSearchString)="sendSearchString($event)">
    </contacts-filter-item>

    <br />

    <contacts-filter-item [filterType]="'Phone'"
                       (onSendSearchString)="sendSearchString($event)">
    </contacts-filter-item>

    <br />

    <contacts-filter-item [filterType]="'Organization'"
                       (onSendSearchString)="sendSearchString($event)">
    </contacts-filter-item>

    <br />

    <contacts-filter-item [filterType]="'Misc'"
                       (onSendSearchString)="sendSearchString($event)">
    </contacts-filter-item>

    <br />
    
    <div class="row">
      <div class="input-field col s12">
        <input class="btn blue-grey lighten-2 right" type="button" value="Close" 
               (click)="closeContactsFilterSection()" />
      </div>
    </div>

    <br />
  </div> 
  `
})
export class ContactsFilterContainerComponent implements OnInit {

  @Output() private onCloseFilterContactsSection: EventEmitter<boolean>;
  @Output() private onSendSearchString: EventEmitter<SearchStringEventArgs>;
  private _isFilterContactSectionEnabled: boolean;

  public constructor () {
    this.onCloseFilterContactsSection = new EventEmitter<boolean>();
    this.onSendSearchString = new EventEmitter<SearchStringEventArgs>();
    this._isFilterContactSectionEnabled = false;
  }

  public ngOnInit () {

  }

  public closeContactsFilterSection () {
    this.onCloseFilterContactsSection.emit(this._isFilterContactSectionEnabled);
  }

  public sendSearchString (searchStringEventArgs: SearchStringEventArgs) {
    this.onSendSearchString.emit(searchStringEventArgs);
  }
}
