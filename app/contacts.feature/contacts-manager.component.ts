import { Component, OnInit, Output, EventEmitter,
  Inject, ElementRef }                             from "@angular/core";
import { ContactsService }                         from "./contacts.service";
import { Contact }                                 from "./contact.model"; 
import { SearchStringEventArgs }                   from "./contacts-filter-item.component";

@Component({
  selector: "contacts-manager",
  styles: [`  
  div a {
    color:#546e7a;
  }  
  `],
  template: `
  <div class="collection z-depth-1">
    <a href="#" class="collection-item waves-effect waves-teal" 
       (click)="openAddContactSection()">Add contact</a>
    <a href="#" class="collection-item waves-effect waves-teal"
       (click)="sendSearchString()">Show all</a>
    <a href="#" class="collection-item waves-effect waves-teal"
       (click)="openFilterContactSection()">Filter contacts</a>
  </div>
  `
})
export class ContactsManagerComponent implements OnInit {

  @Output() private onOpenAddContactSection: EventEmitter<boolean>;
  @Output() private onOpenFilterContactSection: EventEmitter<boolean>;
  @Output() private onSendSearchString: EventEmitter<SearchStringEventArgs>;
  private _isAddContactSectionEnabled: boolean = true;
  private _isFilterContactSectionEnabled: boolean = true;

  public constructor(private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onOpenAddContactSection = new EventEmitter<boolean>();
    this.onOpenFilterContactSection = new EventEmitter<boolean>();
    this.onSendSearchString = new EventEmitter<SearchStringEventArgs>();
  }
  
  // Disabling native click event so that anchor element 
  // is not able to navigate to "#" 
  public ngOnInit () {
    this.$(this._elRef.nativeElement)
      .find("a").click(() => false);
  }

  public openAddContactSection () {
    this.onOpenAddContactSection.emit(this._isAddContactSectionEnabled)
  }

  public openFilterContactSection () {
    this.onOpenFilterContactSection.emit(this._isFilterContactSectionEnabled);
  }

  // Sending search for all contacts (default).
  public sendSearchString () {
    let searchStringEventArgs = new SearchStringEventArgs();
    searchStringEventArgs.searchString = "";
    searchStringEventArgs.filterType = "Name";
    this.onSendSearchString.emit(searchStringEventArgs);
  }
}
