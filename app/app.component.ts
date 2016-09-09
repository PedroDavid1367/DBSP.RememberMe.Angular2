import { Component, OnInit, ElementRef, Inject }  from "@angular/core";
import { Router, ROUTER_DIRECTIVES }              from "@angular/router";
import { OidcTokenManagerService }                from "./common.services/oidc-token-manager.service";

import { NotesHelpComponent }  from "./notes.feature/notes-help.component";
//import { OAuthService }               from "angular2-oauth2/oauth-service";
//let $ = require("jquery");

/*
 * Currently the main application component (i.e this) has the functionality to login or logout.
 * Nevertheless, this behaviour might/should be in a different component, maybe a header.
 */
@Component({
  selector: "app",
  styles: [`
  .brand-logo{
    display: block;
  }

  @media (max-width: 800px) 
  {
      .brand-logo
      {
          display: none;
      }
  }
  `],
  template: require("./app.component.html")
})
export class AppComponent implements OnInit {

  private mgr;

  constructor(private _oidcmanager: OidcTokenManagerService,
    private _elRef: ElementRef,
    private _router: Router,
    @Inject("$") private $: any) {

    this.mgr = this._oidcmanager.mgr;
  }

  public ngOnInit() {
    this.$(this._elRef.nativeElement)
      .find(".button-collapse")
      .sideNav({
        closeOnClick: true
      });
  }

  public logOutOfIdSrv() {
    this.mgr.redirectForLogout();
  }

  // This might be removed since logOutOfIdSrv()
  // is the current way of logging out.
  public logout() {
    this.mgr.removeToken();
    window.location.href = "index.html";
  }

  public login() {
    this.mgr.redirectForToken();
  }

  public openNotesSecurityMessage() {
    if (this.mgr.expired) {
      this.$(this._elRef.nativeElement)
        .find("#notesAccessModal").openModal();
    } else {
      this.toNotes();
    }
  }

  public toNotes() {
    this._router.navigate(["/notes"]);
  }

  public cancelToNotes() {
    this.$(this._elRef.nativeElement)
      .find("#notesAccessModal").closeModal();
  }

    public openContactsSecurityMessage() {
    if (this.mgr.expired) {
      this.$(this._elRef.nativeElement)
        .find("#contactsAccessModal").openModal();
    } else {
      this.toContacts();
    }
  }

  public toContacts() {
    this._router.navigate(["/contacts"]);
  }

  public cancelToContacts() {
    this.$(this._elRef.nativeElement)
      .find("#contactsAccessModal").closeModal();
  }

  public openLogoutMessage() {
    this.$(this._elRef.nativeElement)
      .find("#logoutModal").openModal();
  }

  public closeLogoutMessage() {
    this.$(this._elRef.nativeElement)
      .find("#logoutModal").closeModal();
  }
}
