import { NgModule }            from "@angular/core";
import { BrowserModule }       from "@angular/platform-browser";
//import { CommonModule }        from "@angular/common";
import { HttpModule }          from "@angular/http";
//import { FormsModule }         from "@angular/forms";

/* App Providers */
import { APP_PROVIDERS }       from "./app.providers";

/* App Root */
import { AppComponent }        from "./app.component";

/* Feature Modules */
import { HomeModule }          from "./home.feature/home.module";
import { NotesModule }         from "./notes.feature/notes.module";
//import { HeaderModule }        from "./header.feature/header.module"

/* Header features */
import { UserInfoComponent }        from "./header.feature/user-info.component"
import { HeadContainerComponent }   from "./header.feature/head-container.component"

import { routing }             from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    //CommonModule,
    HttpModule,
    //FormsModule,
    //HeaderModule,
    HomeModule,
    NotesModule,
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
