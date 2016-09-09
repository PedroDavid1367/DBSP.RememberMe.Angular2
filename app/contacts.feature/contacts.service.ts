import { Injectable, Inject }                       from "@angular/core";
import { Response, Headers, RequestOptions }        from "@angular/http";
//import { Note }                                     from "./note.model";
import { Observable }                               from "rxjs/Observable";
import { HttpExtendedService }                      from "../common.services/http-extended.service";
//import { PageClickedEventArgs }                     from "./notes-pagination.component";

@Injectable()
export class ContactsService {

  // constructor (private _http: HttpExtendedService,
  //   @Inject("BASE_URL") private _baseUrl: string) { }

  // // TODO: return Observable<OdataResponse>
  // public getNotes (): Observable<any> {
  //   return this._http
  //     // .get(this._baseUrl + "odata/Notes?$count=true")
  //     .get(this._baseUrl + "odata/Notes")
  //     .map(res => {
  //       let body = res.json();
  //       // The body has context, count and value
  //       return body || {};
  //     })
  //     .catch(this.handleError);
  // }

  // public getNotesWithSkip (skip: number) {
  //   return this._http
  //     .get(this._baseUrl + `odata/Notes?$skip=${skip}`)
  //     .map(res => {
  //       let body = res.json();
  //       // The body has context and value
  //       return body.value || {};
  //     })
  //     .catch(this.handleError);
  // }

  // public getNotesWithSkipAndFilter (pageClickedEventArgs: PageClickedEventArgs) {
  //   let skip = pageClickedEventArgs.skip;
  //   let searchString = pageClickedEventArgs.searchString;
  //   let filterType = pageClickedEventArgs.filterType;

  //   if (filterType === "Priority") {
  //     let testedNumber = parseInt(searchString);
  //     if (testedNumber !== NaN) {
  //       return this._http
  //         .get(`${this._baseUrl}odata/Notes?$skip=${skip}&$filter=${filterType} eq ${searchString}`)
  //         .map(res => {
  //           let body = res.json();
  //           // The body has context and value
  //           return body.value || {};
  //         })
  //         .catch(this.handleError);
  //     }
  //   }

  //   return this._http
  //     .get(`${this._baseUrl}odata/Notes?$skip=${skip}&$filter=contains(${filterType},'${searchString}')`)
  //     .map(res => {
  //       let body = res.json();
  //       // The body has context and value
  //       return body.value || {};
  //     })
  //     .catch(this.handleError);
  // }

  // public getNotesCountForFilter (searchString: string, filterType: string) {
  //   if (filterType === "Priority") {
  //     let testedNumber = parseInt(searchString);
  //     if (testedNumber !== NaN) {
  //       return this._http
  //         .get(`${this._baseUrl}odata/Notes?$count=true&$filter=${filterType} eq ${searchString}`)
  //         .map(res => {
  //           let body = res.json();
  //           // The body has context, count and value
  //           return body["@odata.count"];
  //         })
  //         .catch(this.handleError);
  //     }
  //   }

  //   return this._http
  //     .get(`${this._baseUrl}odata/Notes?$count=true&$filter=contains(${filterType},'${searchString}')`)
  //     .map(res => {
  //       let body = res.json();
  //       // The body has context, count and value
  //       return body["@odata.count"];
  //     })
  //     .catch(this.handleError);
  // }

  // // TODO: return Observable<OdataResponse>
  // public getNotesCount (): Observable<any> {
  //   return this._http
  //     .get(`${this._baseUrl}odata/Notes/RememberMe.Functions.GetNotesCount()`)
  //     .map(res => {
  //       let body = res.json();
  //       // The body has context and value
  //       return body.value;
  //     })
  //     .catch(this.handleError);
  // }

  // // TODO: return Observable<OdataResponse>
  // public addNote (note: any): Observable<any> {
  //   return this._http
  //     .post(`${this._baseUrl}odata/Notes`, note)
  //     .map(res => {
  //       let body = res.json();
  //       return body || {};
  //     })
  //     .catch(this.handleError);
  // }

  // // TODO: return Observable<OdataResponse>
  // public editNote (note: any): Observable<any> {
  //   return this._http
  //     .patch(`${this._baseUrl}odata/Notes(${note.Id})`, note)
  //     .map(res => {
  //       return res;
  //     })
  //     .catch(this.handleError);
  // }

  // // TODO: return Observable<OdataResponse>
  // public deleteNote (note: any): Observable<any> {
  //   return this._http
  //     .delete(`${this._baseUrl}odata/Notes(${note.Id})`)
  //     .map(res => {
  //       return res;
  //     })
  //     .catch(this.handleError);
  // }

  // private handleError (error: any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   // We'd also dig deeper into the error to get a better message
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Observable.throw(errMsg);
  // }
}