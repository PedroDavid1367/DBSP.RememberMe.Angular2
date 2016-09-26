import { Injectable, Inject }                       from "@angular/core";
import { Note }                                     from "./note.model";

@Injectable()
export class NotesSharedItemsDateilsService {

  public notes: Note[];

  public constructor () { 

    this.notes = [];
  }
}