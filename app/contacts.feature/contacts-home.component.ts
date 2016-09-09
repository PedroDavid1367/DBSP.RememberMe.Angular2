import { Component }                from "@angular/core";
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";
import { SearchStringEventArgs }    from "./contacts-filter-item.component";

@Component({
  selector: 'contacts-home',
  styles: [`

  `],
  template: `
  <div class="col s12 m4">
    <div class="col s12 offset-m1">
      <contacts-help></contacts-help>

      <!-- The Event onOpenAddContactSection is generated when contacts-manager component is clicked -->
      <!-- $event is a boolean -->
      <contacts-manager (onOpenAddContactSection)="setIsAddContactSectionEnabled($event)"
                        (onOpenFilterContactSection)="setIsFilterContactSectionEnabled($event)"
                        (onSendSearchString)="toContactsContainer($event)">               
      </contacts-manager>

      <contacts-filter-container *ngIf="isFilterContactSectionEnabled"
                                 (onCloseFilterContactsSection)="setIsFilterContactSectionEnabled($event)"
                                 (onSendSearchString)="toContactsContainer($event)">                   
      </contacts-filter-container>
    </div>
  </div>

  <div class="col s12 m8">
    <div class="col s12">
      <contacts-container [isAddContactSectionEnabled]="isAddContactSectionEnabled"
                          [searchString]="searchString"
                          [filterType]="filterType"
                          (onCloseAddContactSection)="setIsAddContactSectionEnabled($event)">                   
      </contacts-container>
    </div>
  </div>
  `
})
export class ContactsHomeComponent {

  public isAddContactSectionEnabled: boolean;
  public isFilterContactSectionEnabled: boolean;
  public searchString: string;
  public filterType: string; 

  // Sending search for all contacts (default).
  public constructor () {
    this.searchString = "";
    this.filterType = "Name"; 
  }

  public setIsAddContactSectionEnabled (isAddContactSectionEnabled: boolean) {
    this.isAddContactSectionEnabled = isAddContactSectionEnabled;
  }

  public setIsFilterContactSectionEnabled (isFilterContactSectionEnabled: boolean) {
    this.isFilterContactSectionEnabled = isFilterContactSectionEnabled;
  }

  public toContactsContainer (searchStringEventArgs: SearchStringEventArgs) {
    this.searchString = searchStringEventArgs.searchString;
    this.filterType = searchStringEventArgs.filterType;
  }
}