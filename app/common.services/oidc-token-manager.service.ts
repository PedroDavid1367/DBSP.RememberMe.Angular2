require("../js.libs/oidc-token-manager.js");
declare let OidcTokenManager: any;

import { Injectable} from '@angular/core';

@Injectable()
export class OidcTokenManagerService {
  private _config = {
    client_id: "remembermeimplicit",
    redirect_uri: "http://localhost:8888/callback",
    post_logout_redirect_uri: "http://localhost:8888/home",
    response_type: "id_token token",
    scope: "openid profile addresses notesmanagement roles",
    authority: "http://localhost:1693/identity",
    silent_redirect_uri: "http://localhost:8888/silent-refresh",
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
