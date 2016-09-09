import { Injectable, Inject }                       from "@angular/core";
import { Response, Headers, RequestOptions }        from "@angular/http";
import { Contact }                                  from "./contact.model";
import { Observable }                               from "rxjs/Observable";
import { HttpExtendedService }                      from "../common.services/http-extended.service";
import { PageClickedEventArgs }                     from "./contacts-pagination.component";

@Injectable()
export class ContactsService {

  constructor (private _http: HttpExtendedService,
    @Inject("BASE_URL") private _baseUrl: string) { }

  // TODO: return Observable<OdataResponse>
  public getContacts (): Observable<any> {
    return this._http
      .get(this._baseUrl + "odata/Contacts")
      .map(res => {
        let body = res.json();
        // The body has context, count and value
        return body || {};
      })
      .catch(this.handleError);
  }

  public getContactsWithSkip (skip: number) {
    return this._http
      .get(this._baseUrl + `odata/Contacts?$skip=${skip}`)
      .map(res => {
        let body = res.json();
        // The body has context and value
        return body.value || {};
      })
      .catch(this.handleError);
  }

  public getContactsWithSkipAndFilter (pageClickedEventArgs: PageClickedEventArgs) {
    let skip = pageClickedEventArgs.skip;
    let searchString = pageClickedEventArgs.searchString;
    let filterType = pageClickedEventArgs.filterType;
    return this._http
      .get(`${this._baseUrl}odata/Contacts?$skip=${skip}&$filter=contains(${filterType},'${searchString}')`)
      .map(res => {
        let body = res.json();
        // The body has context and value
        return body.value || {};
      })
      .catch(this.handleError);
  }

  public getContactsCountForFilter (searchString: string, filterType: string) {
    return this._http
      .get(`${this._baseUrl}odata/Contacts?$count=true&$filter=contains(${filterType},'${searchString}')`)
      .map(res => {
        let body = res.json();
        // The body has context, count and value
        return body["@odata.count"];
      })
      .catch(this.handleError);
  }

  // TODO: return Observable<OdataResponse>
  public getContactsCount (): Observable<any> {
    return this._http
      .get(`${this._baseUrl}odata/Contacts/RememberMe.Functions.GetContactsCount()`)
      .map(res => {
        let body = res.json();
        // The body has context and value
        return body.value;
      })
      .catch(this.handleError);
  }

  // TODO: return Observable<OdataResponse>
  public addContact (contact: any): Observable<any> {
    return this._http
      .post(`${this._baseUrl}odata/Contacts`, contact)
      .map(res => {
        let body = res.json();
        return body || {};
      })
      .catch(this.handleError);
  }

  // TODO: return Observable<OdataResponse>
  public editContact (contact: any): Observable<any> {
    return this._http
      .patch(`${this._baseUrl}odata/Contacts(${contact.Id})`, contact)
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  // TODO: return Observable<OdataResponse>
  public deleteContact (contact: any): Observable<any> {
    return this._http
      .delete(`${this._baseUrl}odata/Contacts(${contact.Id})`)
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}