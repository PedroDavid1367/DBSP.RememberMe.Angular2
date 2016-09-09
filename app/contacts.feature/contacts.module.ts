import { NgModule }                 from "@angular/core";
import { CommonModule }             from "@angular/common";

import { routing }                  from "./contacts.routing";
import { ContactsHomeComponent }       from "./contacts-home.component"
import { ContactsContainerComponent }  from "./contacts-container.component";
import { ContactsPaginationComponent } from "./contacts-pagination.component";
import { ContactsPaginationItemComponent }  from "./contacts-pagination-item.component";
import { ContactsAddItemComponent }    from "./contacts-add-item.component";
import { ContactsListComponent }       from "./contacts-list.component";
import { ContactsItemComponent }       from "./contacts-item.component";
import { ContactsHelpComponent }       from "./contacts-help.component";
import { ContactsManagerComponent }    from "./contacts-manager.component";
import { ContactsFilterContainerComponent }     from "./contacts-filter-container.component";
import { ContactsFilterItemComponent }     from "./contacts-filter-item.component";
import { ContactsService }             from "./contacts.service"; 

import { FormsModule }  from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    routing
  ],
  declarations: [
    ContactsHomeComponent,
    ContactsContainerComponent,
    ContactsPaginationComponent,
    ContactsPaginationItemComponent,
    ContactsAddItemComponent,
    ContactsListComponent,
    ContactsItemComponent,
    ContactsHelpComponent,
    ContactsManagerComponent,
    ContactsFilterContainerComponent,
    ContactsFilterItemComponent
  ],
  providers: [
    ContactsService
  ]
})
export class ContactsModule { }
