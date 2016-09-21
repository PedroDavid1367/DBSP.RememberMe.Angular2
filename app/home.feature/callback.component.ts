require("../js.libs/oidc-token-manager");

declare let OidcClient: any;

import { Component, OnInit }        from '@angular/core';
import { Router }                   from "@angular/router";
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";

@Component({
  selector: 'callback',
  template: `
  `
})
export class CallbackComponent implements OnInit {

  private _config = {
    client_id: "remembermeimplicit",
    //redirect_uri: "http://localhost:8888/callback",
    redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/callback",
    //post_logout_redirect_uri: "http://localhost:8888/home",
    post_logout_redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/home",
    load_user_profile: false,
    //authority: "http://localhost:1693/identity",
    authority: "http://dbsp-rememberme-identity.azurewebsites.net/identity",
  };

  private _mgr: any; 

  constructor(private _router: Router,
    private _oidcTokenManager: OidcTokenManagerService)
  {
    this._mgr = _oidcTokenManager.mgr;
    this._mgr.oidcClient = new OidcClient(this._config);
  }

  ngOnInit()
  {
    this._mgr.processTokenCallbackAsync()
      .then(() => this._router.navigate(["home"]))
      .catch(err => {
        // Try to use a modal instead of an alert.
        alert("Problem Getting Token : " + (err.message || err));
        this._router.navigate(["home"]);
      });
  }
}
