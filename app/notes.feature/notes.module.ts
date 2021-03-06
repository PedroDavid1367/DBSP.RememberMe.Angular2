import { NgModule }                 from "@angular/core";
import { CommonModule }             from "@angular/common";

import { routing }                  from "./notes.routing";
import { NotesHomeComponent }       from "./notes-home.component"
import { NotesHomegGuard }          from "./notes-home.guard";
import { NotesContainerComponent }  from "./notes-container.component";
import { NotesPaginationComponent } from "./notes-pagination.component";
import { NotesPaginationItemComponent }  from "./notes-pagination-item.component";
import { NotesAddItemComponent }    from "./notes-add-item.component";
import { NotesListComponent }       from "./notes-list.component";
import { NotesItemComponent }       from "./notes-item.component";
import { NotesHelpComponent }       from "./notes-help.component";
import { NotesManagerComponent }    from "./notes-manager.component";
import { NotesFilterContainerComponent }     from "./notes-filter-container.component";
import { NotesFilterItemComponent }     from "./notes-filter-item.component";
import { NotesService }             from "./notes.service";
import { NotesItemDetailsComponent }  from "./notes-item-details.component"; 
import { NotesItemDetailsContainerComponent }  from "./notes-item-details-container.component"; 
import { NotesSharedItemsDateilsService }  from "./notes-shared-items-details.service";

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
    NotesListComponent,
    NotesItemComponent,
    NotesHelpComponent,
    NotesManagerComponent,
    NotesFilterContainerComponent,
    NotesFilterItemComponent,
    NotesItemDetailsComponent,
    NotesItemDetailsContainerComponent
  ],
  providers: [
    NotesService,
    NotesHomegGuard,
    NotesSharedItemsDateilsService
  ]
})
export class NotesModule { }
