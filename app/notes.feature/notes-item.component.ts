import { Component, Input, Output, EventEmitter }  from "@angular/core";
import { Note }                                    from "./note.model";

@Component({
  selector: "notes-item",
  styles: [`
  div.card {
    cursor:pointer;
  }
  `],
  template: `
  <div [ngClass]="{'card': true, 'lime': true, 'lighten-5': true, 'z-depth-0': selected, 'lighten-4': selected}"
       [ngStyle]="{'color': selectedColor()}" 
       (click)="sendSelectedAction()">
    <div class="card-content">
      <p>Title: {{ note.Title }}</p>
      <p>Category: {{ note.Category }}</p>
      <p>Priority: {{ note.Priority }}</p>
    </div> 
  </div>
  `
})
export class NotesItemComponent {

  @Input() public note: Note;
  @Input() public selected: boolean;
  @Output() private onSelected: EventEmitter<Note>;

  public constructor () {
    this.onSelected = new EventEmitter<Note>();
  }

  public sendSelectedAction () {
    this.onSelected.emit(this.note);
  }

  public selectedColor () {
    if (this.selected) {
      return "seagreen";
    }
  }
}
