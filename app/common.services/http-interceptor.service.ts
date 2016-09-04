import { HTTP_PROVIDERS, Http, Request, RequestOptionsArgs, Response, XHRBackend,
  RequestOptions, ConnectionBackend, Headers }         from "@angular/http";
import { Router }                                      from "@angular/router";
import { Injectable, Inject }                          from "@angular/core";
import { Observable }                                  from "rxjs/Observable";
import { OidcTokenManagerService }                     from "./oidc-token-manager.service";

import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/observable/empty";

export class HttpInterceptorService extends Http {

  @Inject("BASE_URL") private _baseUrl: string;
  private _mgr: any;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions,
    private _router: Router, private _oidcToken: OidcTokenManagerService) {

    super(backend, defaultOptions);
    this._mgr = _oidcToken.mgr;
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    debugger;
    return this.intercept(super.get(url, this.checkApiCall(url, options)));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.post(url, body, options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, body, options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.delete(url, options));
  }

  //public get(url) {
  //  return this._http.get(url, {
  //    headers: this.checkApiCall(url)
  //  });
  //}

  private checkApiCall(url: string, options?: RequestOptionsArgs): RequestOptionsArgs {
    let apiUrl = this._baseUrl + "/api";

    if (options == null) {
      options = new RequestOptions();
    }

    if (options.headers == null) {
      options.headers = new Headers();
    }

    if (!this._mgr.expired && RegExp(apiUrl).test(url)) {
      options.headers.set('Accept', 'text/json');
      options.headers.set('Authorization', 'Bearer ' + this._oidcToken.mgr.access_token);
    }
    return options; 
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    let apiUrl = this._baseUrl + "/api";

    return observable.catch((err, source) => {
      if (err.status == 401 && RegExp(apiUrl).test(err.url)) {
        this._mgr.redirectForToken();
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });
  }
}

//bootstrap(MyApp, [
//  HTTP_PROVIDERS,
//  ROUTER_PROVIDERS,
//  provide(LocationStrategy, { useClass: HashLocationStrategy }),
//  provide(Http, {
//    useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
//    deps: [XHRBackend, RequestOptions, Router]
//  })
//])
//  .catch(err => console.error(err));