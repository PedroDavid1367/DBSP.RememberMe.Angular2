import { Component, OnInit, ElementRef, Inject, OnChanges,
  Input, Output, EventEmitter }                       from "@angular/core";
import { ContactsService }                            from "./contacts.service";
import { Contact }                                    from "./contact.model";
import { AddContactsArgs }                            from "./contacts-add-item.component";
import { PageClickedEventArgs }                       from "./contacts-pagination.component";

@Component({
  selector: "contacts-container",
  template: `
  <contacts-add-item *ngIf="isAddContactSectionEnabled"
                     (onAddContact)="handleAddContactEvent($event)">
  </contacts-add-item>
  
  <contacts-pagination [contactCount]="contactCount"
                       [searchString]="searchString"
                       [filterType]="filterType"
                       (onPageClicked)="getContactsWithSkipAndFilter($event)">
  </contacts-pagination>

  <contacts-list [contacts]="contacts"
                 (onDeleteContact)="openDeleteContactConfirmation($event)"
                 (onEditContact)="editContact($event)">
  </contacts-list>

  <!-- Used for delete confirmation -->
  <div id="deleteConfirmationModal" class="modal">
    <div class="modal-content">
      <h4>Delete confirmation</h4>
      <p>The contact with Name: {{ contactToDelete.Name }} will be deleted</p>
    </div>
    <div class="modal-footer">
      <a (click)="closeDeleteConfirmationMessage()"
         class="modal-action modal-close waves-effect waves-green btn btn-flat">Cancel</a>
      <a (click)="deleteContact()"
         class="modal-action modal-close waves-effect waves-green btn btn-flat">Yes</a>
    </div>
  </div>
  `
})
export class ContactsContainerComponent implements OnInit, OnChanges {

  @Input() public isAddContactSectionEnabled: boolean;
  @Input() private searchString: string;
  @Input() private filterType: string;
  @Output() private onCloseAddContactSection: EventEmitter<boolean>;
  public contacts: Contact[];
  public contactToDelete: Contact;
  private _isAddContactSectionDisabled: boolean;
  public contactCount: number;

  constructor(private _contactsService: ContactsService,
    private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onCloseAddContactSection = new EventEmitter<boolean>();
    this.contactToDelete = new Contact("", "", "", "", "", "");
    this._isAddContactSectionDisabled = false;
    this.contactCount = 0;
  }

  public ngOnInit () {
    this.getContactsCount();
  }

  // ngOnChanges manage if a filtering has been made.
  public ngOnChanges () {
    // Controlling to not trigger on first ngOnChanges call.
    if (this.searchString !== undefined) {
      this._contactsService
        .getContactsCountForFilter(this.searchString, this.filterType)
        .subscribe(res => {
          this.contactCount = res;
          // TODO: Subscribe to error and display it.
      });
    }
  }

  private getContactsCount() {
    this._contactsService
      .getContactsCount()
      .subscribe(res => {
        this.contactCount = res;
        // TODO: Subscribe to error and display it.
      });
  }
  
  private getContactsWithSkipAndFilter(pageClickedEventArgs: PageClickedEventArgs) {
    this._contactsService
      .getContactsWithSkipAndFilter(pageClickedEventArgs)
      .subscribe(res => {
        this.contacts = res;
        // TODO: Subscribe to error and display it.
      });
  }
 
  private handleAddContactEvent(addContactArgs: AddContactsArgs) {
    // Send event to contacts-home component 
    if (addContactArgs.submitted || addContactArgs.canceled) {
      this.onCloseAddContactSection.emit(this._isAddContactSectionDisabled);
    }

    // Adding to API.
    if (addContactArgs.contact) {
      this._contactsService
      .addContact(addContactArgs.contact)
      .subscribe(contact => {
        this.contacts.unshift(contact);
        // TODO: Subscribe to error and display it.
      });
    }
  }


  public openDeleteContactConfirmation(contact: Contact) {
    this.contactToDelete = contact;
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").openModal();
  }

  public deleteContact() {
    // Deleting from API.
    this._contactsService
      .deleteContact(this.contactToDelete)
      .subscribe(res => {
        console.log("The result of deleteContact is:");
        console.log(res);
        // TODO: Subscribe to error and display it.
      });

    // Deleting from UI. 
    console.log(this.contactToDelete);
    let indexToDelete;
    for (let index in this.contacts) {
      if (this.contacts[index].Id === this.contactToDelete.Id) {
        indexToDelete = index;
        break;
      }
    }
    this.contacts.splice(indexToDelete, 1);
    console.log(this.contacts);
  }

  public editContact(contact: Contact) {
    // Editing from API, UI has been already updated.
    this._contactsService
      .editContact(contact)
      .subscribe(res => {
        console.log("The result of editContact is:");
        console.log(res);
        // TODO: Subscribe to error and display it.
      });
  }

  public closeDeleteConfirmationMessage() {
    this.$(this._elRef.nativeElement)
      .find("#deleteConfirmationModal").closeModal();
  }
}
