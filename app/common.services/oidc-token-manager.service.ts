require("../js.libs/oidc-token-manager.js");
declare let OidcTokenManager: any;

import { Injectable} from '@angular/core';

@Injectable()
export class OidcTokenManagerService {
  private _config = {
    client_id: "remembermeimplicit",

    // redirect_uri: "http://localhost:8888/callback", 
    // post_logout_redirect_uri: "http://localhost:8888/home",
    // authority: "http://localhost:1693/identity",   
    // silent_redirect_uri: "http://localhost:8888/silent-refresh",

    // redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/callback",
    // post_logout_redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/home",
    // authority: "http://dbsp-rememberme-identity.azurewebsites.net/identity",
    // silent_redirect_uri: "http://dbsp-rememberme-angular2.azurewebsites.net/silent-refresh",

<<<<<<< HEAD
    // redirect_uri: "http://localhost:8888/callback", 
    // post_logout_redirect_uri: "http://localhost:8888/home",
    // authority: "http://localhost/sts/identity",   
    // silent_redirect_uri: "http://localhost:8888/silent-refresh",
=======
    redirect_uri: "http://localhost:8888/callback", 
    post_logout_redirect_uri: "http://localhost:8888/home",
    authority: "http://localhost/identity",   
    silent_redirect_uri: "http://localhost:8888/silent-refresh",
>>>>>>> 37becd6f98e4b13e9d3bdfba730f30d5046213f9

    response_type: "id_token token",
    scope: "openid profile addresses notesmanagement roles", 
    silent_renew: true
  };

  private _mgr: any;

  constructor() {
    this._mgr = new OidcTokenManager(this._config);
  }

  public get mgr() {
    return this._mgr;
  }
}
