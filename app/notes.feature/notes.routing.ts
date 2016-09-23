import { Routes, RouterModule }                from "@angular/router";
import { NotesHomeComponent }                  from "./notes-home.component";
import { NotesHomegGuard }                     from "./notes-home.guard";
import { NotesAddItemComponent }               from "./notes-add-item.component";
import { NotesItemDetailsContainerComponent }  from "./notes-item-details-container.component";

export const routes: Routes = [
  { 
    path: "notes", 
    component: NotesHomeComponent, 
    canActivate: [NotesHomegGuard],
    children: [
      {
        path: "",
        component: NotesAddItemComponent
      },
      {
        path: ":id",
        component: NotesItemDetailsContainerComponent
      }
    ] 
  }
];

export const routing = RouterModule.forChild(routes);
