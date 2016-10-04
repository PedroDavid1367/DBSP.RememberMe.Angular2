import { NgModule }                 from "@angular/core";
import { BrowserModule }            from "@angular/platform-browser";
import { HttpModule }               from "@angular/http";

/* App Providers */
import { APP_PROVIDERS }            from "./app.providers";

/* App Root */
import { AppComponent }             from "./app.component";

/* Feature Modules */
import { HomeModule }               from "./home.feature/home.module";
import { NotesModule }              from "./notes.feature/notes.module";
import { ContactsModule }           from "./contacts.feature/contacts.module";

/* Header features */
import { UserInfoComponent }        from "./header.feature/user-info.component"
import { HeadContainerComponent }   from "./header.feature/head-container.component"

import { routing }                  from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    NotesModule,
    ContactsModule,
    routing
  ],
  providers: [
    APP_PROVIDERS
  ],
  declarations: [
    AppComponent,
    UserInfoComponent,
    HeadContainerComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
