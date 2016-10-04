import { Component, Input, Output, EventEmitter, 
  OnInit }                                         from "@angular/core";
import { Contact }                                 from "./contact.model";

@Component({
  selector: "contacts-item",
  styles: [`
  div span {
    color:#263238;
  }  
  div p {
    color:#546e7a;
  }
  .ng-valid[required] {
    border-bottom: 1px solid #42A948; /* green */
  }
  .ng-invalid {
    border-bottom: 1px solid #a94442; /* red */
  }
  div.dbsp-footer {
    padding-top: 20px;
  }  
  `],
  template: `
  <div *ngIf="!isEditable" class="row card-panel blue-grey lighten-5">
    <div class="blue-grey-text text-darken-4 col s12 m12">
      Name: {{ contact.Name }}
    </div>
    <div class="blue-grey-text text-darken-4 col s12 m6">
      Email: {{ contact.Email }}
    </div>
    <div class="blue-grey-text text-darken-4 col s12 m6">
      Phone: {{ contact.Phone }}
    </div>
    <div class="blue-grey-text text-darken-4 col s12 m12">
      Organization: {{ contact.Organization }}
    </div>
    <div class="blue-grey-text text-darken-4 col s12 m12">
      Misc: {{ contact.Misc }}
    </div>
    <div class="dbsp-footer right">
      <input type="button" class="btn-flat" style="color:black;" value="Edit" (click)="edit()" />
      <input type="button" class="btn-flat" style="color:black;" value="Delete" (click)="delete()" />
    </div>
  </div>

  <div *ngIf="isEditable" class="row card-panel blue-grey lighten-5 z-depth-4">
    <form class="col s12" #contactForm="ngForm">
      <div class="row">
        <div class="input-field col s12">
          <input id="name" type="text" class="validate" required
                  [(ngModel)]="contact.Name" name="name"
                  #name="ngModel">  
          <label class="active" for="name" data-error="invalid" data-success="valid">Name</label>
          <div [hidden]="name.valid" 
              class="alert alert-danger">
            <sup style="color:red;">Name is required</sup>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="text"
                    [(ngModel)]="contact.Email" name="email">
          <label class="active" for="email">Email</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m6">
          <input id="phone" type="text"
                    [(ngModel)]="contact.Phone" name="phone">
          <label class="active" for="phone">Phone</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m6">
          <input id="organization" type="text"
                    [(ngModel)]="contact.Organization" name="organization">
          <label class="active" for="organization">Organization</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="misc" type="text"
                    [(ngModel)]="contact.Misc" name="misc">
          <label class="active" for="misc">Misc</label>
        </div>
      </div>
    </form>
    <div class="dbsp-footer right">
      <input class="btn-flat" type="button" style="color:black;" [disabled]="!contactForm.form.valid" 
             value="Save" (click)="submit()" />
      <input class="btn-flat" type="button" style="color:black;" value="Reset" (click)="resetChanges()" />
      <input class="btn-flat" type="button" style="color:black;" value="Cancel" (click)="cancelEditMode()" />
    </div>
  </div>
  `
})
export class ContactsItemComponent implements OnInit{

  @Input() public contact: Contact;
  @Output() private onDeleteContact: EventEmitter<Contact>;
  @Output() private onEditContact: EventEmitter<Contact>;
  public isEditable: boolean = false;
  private _backupContact: Contact;

  public constructor () {
    this.onDeleteContact = new EventEmitter<Contact>();
    this.onEditContact = new EventEmitter<Contact>();
  }

  public ngOnInit () {
    this.cloneContact();
  }

  private cloneContact () {
    this._backupContact = new Contact(
      this.contact.Name,
      this.contact.Email,
      this.contact.Phone,
      this.contact.Organization,
      this.contact.Misc,
      this.contact.OwnerId,
      this.contact.Id
    );
  }

  public delete () {
    this.onDeleteContact.emit(this.contact);
  }

  public edit () {
    this.isEditable = true;
  }

  public submit () {
    // TODO: Send to parent to save in the db.
    this.cloneContact();
    this.onEditContact.emit(this.contact);
    // Save the changes on UI and close the editing form.
    this.isEditable = false; 
  }

  public resetChanges () {
    this.contact.Name = this._backupContact.Name;
    this.contact.Email = this._backupContact.Email;
    this.contact.Phone = this._backupContact.Phone;
    this.contact.Organization = this._backupContact.Organization;
    this.contact.Misc = this._backupContact.Misc;
    this.contact.OwnerId = this._backupContact.OwnerId;
    this.contact.Id = this._backupContact.Id;
  }

  public cancelEditMode () {
    this.resetChanges();
    this.isEditable = false;
  }
}

