import { Http, Headers }            from '@angular/http';
import { Injectable, Inject }       from '@angular/core';
import { Observable }               from 'rxjs/Observable';
import { OidcTokenManagerService }  from "./oidc-token-manager.service"

@Injectable()
export class HttpExtendedService {

  private _mgr: any;

  constructor(private _http: Http, private _oidcToken: OidcTokenManagerService,
    @Inject("BASE_URL") private _baseUrl: string) {

    this._mgr = _oidcToken.mgr;
  }

  private checkApiCall(url: string, headers: Headers) : Headers {
    let apiUrl = this._baseUrl + "odata";
    if (RegExp(apiUrl).test(url)) {
      headers.set('Authorization', 'Bearer ' + this._mgr.access_token);
    }     
    return headers;
  }

  public get(url) {
    let headers = new Headers();
    //headers.set("Accept", "text/json");
    headers.set("Accept", "application/json");
    return this._http.get(url, {
      headers: this.checkApiCall(url, headers)
    });
  }

  public post(url, data) {
    let headers = new Headers();
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    return this._http.post(url, data, {
      headers: this.checkApiCall(url, headers)
    });
  }

  public delete(url) {
    let headers = new Headers();
    headers.set("Accept", "application/json");
    return this._http.delete(url, {
      headers: this.checkApiCall(url, headers)
    });
  }
}
