import { Component, Input, Output, EventEmitter,
  ElementRef, Inject, OnInit }                     from "@angular/core";
import { Contact }                                 from "./contact.model";

@Component({
  selector: 'contacts-add-item',
  styles: [`
  .ng-valid[required] {
    border-bottom: 1px solid #42A948; /* green */
  }
  .ng-invalid {
    border-bottom: 1px solid #a94442; /* red */
  }
  `],
  template: `
  <div class="row z-depth-4">
    <form class="col s12" (ngSubmit)="submit()" #contactForm="ngForm">
      <div class="row">
        <div class="input-field col s12">
          <input id="name" type="text" class="validate" required
                  [(ngModel)]="model.Name" name="name"
                  #name="ngModel">  
          <label for="name" data-error="invalid" data-success="valid">Name</label>
          <div [hidden]="name.valid" 
                class="alert alert-danger">
            <sup style="color:red;">Name is required</sup>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m6">
          <textarea id="email" class="materialize-textarea"
                    [(ngModel)]="model.Email" name="email"></textarea>
          <label for="email">Email</label>
        </div>

        <div class="input-field col s12 m6">
          <textarea id="phone" class="materialize-textarea"
                    [(ngModel)]="model.Phone" name="phone"></textarea>
          <label for="phone">Phone</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <textarea id="organization" class="materialize-textarea"
                    [(ngModel)]="model.Organization" name="organization"></textarea>
          <label for="organization">Organization</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <textarea id="misc" class="materialize-textarea"
                    [(ngModel)]="model.Misc" name="misc"></textarea>
          <label for="misc">Misc</label>
        </div>
      </div>

      <div class="row">
        <input class="btn-flat" type="submit" [disabled]="!contactForm.form.valid" value="Save" />
        <input class="btn-flat" type="button" value="Reset contact" (click)="resetContact()" />
        <input class="btn-flat" type="button" value="Cancel" (click)="cancel()" />
      </div>
    </form>
  </div>
  `
})
export class ContactsAddItemComponent implements OnInit {

  // onAddContact eventEmitter actually emits an AddContactsArgs that represents
  // either a contact submission or a contact cancelation. 
  @Output() private onAddContact: EventEmitter<AddContactsArgs>; 
  public model: Contact;

  public constructor () {
    this.onAddContact = new EventEmitter<AddContactsArgs>();
  }

  public ngOnInit () {
    this.model = new Contact("", "", "", "", "", "");
  }

  public submit () {
    let addContactArgs = new AddContactsArgs();
    addContactArgs.submitted = true,
    addContactArgs.canceled = false,
    addContactArgs.contact = this.model
    this.onAddContact.emit(addContactArgs);
  }

  public cancel () {
    let addContactArgs = new AddContactsArgs();
    addContactArgs.submitted = false,
    addContactArgs.canceled = true,
    addContactArgs.contact = null
    this.onAddContact.emit(addContactArgs);
  }

  public resetContact () {
    this.model = new Contact("", "", "", "", "", "");
  }

  public get diagnostic (): string {
    return JSON.stringify(this.model);
  }
}

interface IAddContactArgs {
  submitted: boolean,
  canceled: boolean,
  contact: Contact 
}

export class AddContactsArgs implements IAddContactArgs {
  public submitted: boolean;
  public canceled: boolean;
  public contact: Contact; 
}

