import { Component, Input, Output, EventEmitter }  from "@angular/core";
import { Contact }                                from "./contact.model"; 

@Component({
  selector: 'contacts-list',
  template: `
  <contacts-item *ngFor="let contact of contacts"
                 [contact]="contact"
                 (onDeleteContact)="sendContactToDelete($event)"
                 (onEditContact)="sendContactToEdit($event)">
  </contacts-item>
  `
})
export class ContactsListComponent {

  @Input() public contacts: Contact[];
  @Output() private onDeleteContact: EventEmitter<Contact>;
  @Output() private onEditContact: EventEmitter<Contact>;

  public constructor () {
    this.onDeleteContact = new EventEmitter<Contact>();
    this.onEditContact = new EventEmitter<Contact>();
  }

  public sendContactToDelete (contact: Contact) {
    this.onDeleteContact.emit(contact);
  }

  public sendContactToEdit (contact: Contact) {
    this.onEditContact.emit(contact);
  }
}
