import { Routes, RouterModule }      from "@angular/router";
import { ContactsHomeComponent }        from "./contacts-home.component";

export const routes: Routes = [
  { path: "contacts", component: ContactsHomeComponent }
];

export const routing = RouterModule.forChild(routes);
