import { Routes, RouterModule }      from "@angular/router";
import { NotesHomeComponent }        from "./notes-home.component";
import { NotesHomegGuard }           from "./notes-home.guard";

export const routes: Routes = [
  { path: "notes", component: NotesHomeComponent, canActivate: [NotesHomegGuard] }
];

export const routing = RouterModule.forChild(routes);