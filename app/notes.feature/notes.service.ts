import { Injectable, Inject }                       from "@angular/core";
import { Response, Headers, RequestOptions }        from "@angular/http";
import { Note }                                     from "./note.model";
import { Observable }                               from "rxjs/Observable";
import { HttpExtendedService }  from "../common.services/http-extended.service";

@Injectable()
export class NotesService {

  constructor(private _http: HttpExtendedService,
    @Inject("BASE_URL") private _baseUrl: string) { }

  // TODO: return Observable<OdataResponse>
  public getNotes(): Observable<any> {
    return this._http
      .get(this._baseUrl + "odata/Notes?$count=true")
      .map(res => {
        let body = res.json();
        // The body has context, count and value
        return body || {};
      })
      .catch(this.handleError);
  }

  // TODO: return Observable<OdataResponse>
  public addNote(note: any): Observable<any> {
    return this._http
      .post(this._baseUrl + "odata/Notes", note)
      .map(res => {
        let body = res.json();
        return body || {};
      })
      .catch(this.handleError);
  }

  // TODO: return Observable<OdataResponse>
  public editNote(note: any): Observable<any> {
    return this._http
      .patch(this._baseUrl + `odata/Notes(${note.Id})`, note)
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  // TODO: return Observable<OdataResponse>
  public deleteNote(note: any): Observable<any> {
    return this._http
      .delete(this._baseUrl + `odata/Notes(${note.Id})`)
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}