import { Component, Input, Output, EventEmitter }  from "@angular/core";
import { Note }                                    from "./note.model"; 
import { NotesItemComponent }                      from "./notes-item.component";

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
  @Output() public onDeleteNote: EventEmitter<NotesItemComponent> = new EventEmitter<NotesItemComponent>();
  @Output() public onEditNote: EventEmitter<NotesItemComponent> = new EventEmitter<NotesItemComponent>();

  public sendNoteToDelete(event: NotesItemComponent) {
    this.onDeleteNote.emit(event);
  }

  public sendNoteToEdit(event: NotesItemComponent) {
    this.onEditNote.emit(event);
  }
}
