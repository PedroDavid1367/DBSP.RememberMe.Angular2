import { NgModule }                          from "@angular/core";
import { CommonModule }                      from "@angular/common";

import { routing }                           from "./notes.routing";
import { NotesHomeComponent }                from "./notes-home.component"
import { NotesHomegGuard }                   from "./notes-home.guard";
import { NotesPaginationComponent }          from "./notes-pagination.component";
import { NotesPaginationItemComponent }      from "./notes-pagination-item.component";
import { NotesAddItemComponent }             from "./notes-add-item.component";
import { NotesItemComponent }                from "./notes-item.component";
import { NotesHelpComponent }                from "./notes-help.component";
import { NotesManagerComponent }             from "./notes-manager.component";
import { NotesFilterContainerComponent }     from "./notes-filter-container.component";
import { NotesService }                      from "./notes.service"; 
import { NotesItemListComponent }            from "./notes-item-list.component";
import { NotesItemContainerComponent }       from "./notes-item-container.component";
import { NotesDetailComponent }              from "./notes-detail.component";
import { NotesDetailContainerComponent }     from "./notes-detail-container.component";

import { FormsModule }                       from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    routing
  ],
  declarations: [
    NotesHomeComponent,
    NotesPaginationComponent,
    NotesPaginationItemComponent,
    NotesAddItemComponent,
    NotesItemComponent,
    NotesHelpComponent,
    NotesManagerComponent,
    NotesFilterContainerComponent,
    NotesItemListComponent,
    NotesItemContainerComponent,
    NotesDetailComponent,
    NotesDetailContainerComponent
  ],
  providers: [
    NotesService,
    NotesHomegGuard
  ]
})
export class NotesModule { }