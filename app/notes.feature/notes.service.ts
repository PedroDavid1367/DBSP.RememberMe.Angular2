import { Injectable, Inject }                       from "@angular/core";
import { Response, Headers, RequestOptions }        from "@angular/http";
import { Note }                                     from "./note.model";
import { Observable }                               from "rxjs/Observable";
import { HttpExtendedService }  from "../common.services/http-extended.service";

@Injectable()
export class NotesService {

  constructor(private _http: HttpExtendedService,
    @Inject("BASE_URL") private _baseUrl: string) { }

  // TODO: return Observable<Note>
  public getNotes(): Observable<Note[]> {
    return this._http
      .get(this._baseUrl + "odata/Notes")
      .map(res => {
        let body = res.json();
        return body.value || {};
      })
      .catch(this.handleError);
  }

  // TODO: return Observable<Note>
  public addNote(note: any): Observable<any> {
    return this._http
      .post(this._baseUrl + "odata/Notes", note)
      .map(res => {
        let body = res.json();
        return body || {};
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