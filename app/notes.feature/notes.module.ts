import { NgModule }                 from "@angular/core";
import { CommonModule }             from "@angular/common";

import { routing }                  from "./notes.routing";
import { NotesHomeComponent }       from "./notes-home.component"
import { NotesHomegGuard }          from "./notes-home.guard";
import { NotesContainerComponent }  from "./notes-container.component";
import { NotesPaginationComponent } from "./notes-pagination.component";
import { NotesPaginationItemComponent }  from "./notes-pagination-item.component";
import { NotesAddItemComponent }    from "./notes-add-item.component";
import { NotesItemComponent }       from "./notes-item.component";
import { NotesHelpComponent }       from "./notes-help.component";
import { NotesManagerComponent }    from "./notes-manager.component";
import { NotesFilterContainerComponent }     from "./notes-filter-container.component";
import { NotesFilterItemComponent }     from "./notes-filter-item.component";
<<<<<<< HEAD
import { NotesService }             from "./notes.service";
import { NotesItemDetailsComponent }  from "./notes-item-details.component"; 
import { NotesItemDetailsContainerComponent }  from "./notes-item-details-container.component"; 
import { NotesSharedItemsDateilsService }  from "./notes-shared-items-details.service";
=======
import { NotesService }             from "./notes.service"; 
import { NotesItemListComponent }       from "./notes-item-list.component";
import { NotesItemContainerComponent }       from "./notes-item-container.component";
import { NotesDetailComponent }       from "./notes-detail.component";
import { NotesDetailContainerComponent }       from "./notes-detail-container.component";

import { FilterContainerComponent }     from "./filter-container.component";
import { FilterItemComponent }     from "./filter-item.component";
>>>>>>> pf-01-enhancing-old-view

import { FormsModule }  from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    routing
  ],
  declarations: [
    NotesHomeComponent,
    NotesContainerComponent,
    NotesPaginationComponent,
    NotesPaginationItemComponent,
    NotesAddItemComponent,
    NotesItemComponent,
    NotesHelpComponent,
    NotesManagerComponent,
    NotesFilterContainerComponent,
    NotesFilterItemComponent,
<<<<<<< HEAD
    NotesItemDetailsComponent,
    NotesItemDetailsContainerComponent
=======
    NotesItemListComponent,
    NotesItemContainerComponent,
    NotesDetailComponent,
    NotesDetailContainerComponent,
    FilterContainerComponent,
    FilterItemComponent
>>>>>>> pf-01-enhancing-old-view
  ],
  providers: [
    NotesService,
    NotesHomegGuard,
    NotesSharedItemsDateilsService
  ]
})
export class NotesModule { }
