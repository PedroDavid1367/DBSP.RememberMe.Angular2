import { Routes, RouterModule }    from "@angular/router";
import { HomeComponent }           from "./home.component";
import { CallbackComponent }       from "./callback.component";
import { LocalLogoutComponent }    from "./local-logout.component";
import { NotFoundComponent }       from "./not-found.component";  // Not yet implemented.
import { SilentRefreshComponent }  from "./silent-refresh.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "callback", component: CallbackComponent },
  { path: "local-logout", component: LocalLogoutComponent },
  { path: "silent-refresh", component: SilentRefreshComponent }
];

export const routing = RouterModule.forChild(routes);