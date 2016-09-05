import { Component, Input, Output, EventEmitter }  from "@angular/core";
import { Note }                                    from "./note.model";

@Component({
  selector: 'notes-item',
  styles: [`
  div span {
    color:#263238;
  }  
  div p {
    color:#546e7a;
  }  
  `],
  template: `
  <div class="card lime lighten-5">
    <div class="card-content white-text">
      <span class="card-title">{{ note.Title }}</span>
      <p>
        {{ note.Content }}    
      </p>
      <br />  
      <p>Category: {{ note.Category }}</p>
      <p>Priority: {{ note.Priority }}</p>
    </div>
    <div class="card-action blue-grey lighten-1">
      <input type="button" class="btn-flat" style="color:white;" value="Edit" />
      <input type="button" class="btn-flat" style="color:white;" value="To reminder" />
      <input type="button" class="btn-flat" style="color:white;" value="Delete" (click)="delete()" />
    </div>
  </div>
  `
})
export class NotesItemComponent {

  @Input() public note: Note;
  @Output() public onDeleteNote: EventEmitter<NotesItemComponent> = new EventEmitter<NotesItemComponent>();

  public delete() {
    this.onDeleteNote.emit(this);
  }
}
