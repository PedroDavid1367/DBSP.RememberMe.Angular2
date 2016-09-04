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

import { routing }             from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    //CommonModule,
    HttpModule,
    //FormsModule,
    HomeModule,
    NotesModule,
    routing
  ],
  providers: [
    APP_PROVIDERS
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
