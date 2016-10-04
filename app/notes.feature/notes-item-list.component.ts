import { Component, Input, Output, EventEmitter }  from "@angular/core";
import { Note }                                    from "./note.model"; 

@Component({
  selector: 'notes-item-list',
  template: `
  <notes-item *ngFor="let note of notes"
              [selected]="note.Selected"
              [note]="note"
              (onSelected)="sendToContainer($event)">
  </notes-item>
  `
})
export class NotesItemListComponent {

  @Input() public notes: Note[];
  @Output() private onNoteSelected: EventEmitter<Note>;

  public constructor () {
    this.onNoteSelected = new EventEmitter<Note>();
  }

  public sendToContainer(note: Note) {
    this.notes.forEach(n => {
      n.Selected = false;
    });
    this.notes.filter(n => {
      return n.Id === note.Id;
    })
    .map( n => {
      n.Selected = true;
    });
    this.onNoteSelected.emit(note);
  }
}
