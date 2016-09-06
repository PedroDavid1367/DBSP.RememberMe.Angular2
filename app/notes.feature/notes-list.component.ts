import { Component, Input, Output, EventEmitter }  from "@angular/core";
import { Note }                                    from "./note.model"; 

@Component({
  selector: 'notes-list',
  template: `
  <notes-item *ngFor="let note of notes"
              [note]="note"
              (onDeleteNote)="sendNoteToDelete($event)"
              (onEditNote)="sendNoteToEdit($event)">
  </notes-item>
  `
})
export class NotesListComponent {

  @Input() public notes: Note[];
  @Output() private onDeleteNote: EventEmitter<Note>;
  @Output() private onEditNote: EventEmitter<Note>;

  public constructor () {
    this.onDeleteNote = new EventEmitter<Note>();
    this.onEditNote = new EventEmitter<Note>();
  }

  public sendNoteToDelete(note: Note) {
    this.onDeleteNote.emit(note);
  }

  public sendNoteToEdit(note: Note) {
    this.onEditNote.emit(note);
  }
}
