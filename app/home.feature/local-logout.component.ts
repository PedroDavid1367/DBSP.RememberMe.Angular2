import { Component, OnInit }        from '@angular/core';
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";

@Component({
  selector: 'local-logout',
  template: `
  `
})
export class LocalLogoutComponent implements OnInit {

  private _mgr: any; 

  constructor(private _oidcTokenManager: OidcTokenManagerService)
  {
    this._mgr = _oidcTokenManager.mgr;
  }

  ngOnInit()
  {
    this._mgr.removeToken();
  }
}
