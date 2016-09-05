import { Component, OnInit, Output, EventEmitter,
  Inject, ElementRef }   from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model"; 

@Component({
  selector: 'notes-manager',
  styles: [`  
  div a {
    color:#546e7a;
  }  
  `],
  template: `
  <div class="collection z-depth-1">
    <a href="#" class="collection-item" 
       (click)="setEnableAddNote()">Add note</a>
    <a href="#" class="collection-item">Filter notes</a>
  </div>
  `
})
export class NotesManagerComponent implements OnInit {

  @Output() public onAddNote: EventEmitter<boolean> = new EventEmitter<boolean>();
  private _isAddNoteEnabled: boolean = true;

  constructor(private _elRef: ElementRef,
    @Inject("$") private $: any) {
  }
  
  public ngOnInit() {
    this.$(this._elRef.nativeElement)
      .find("a").click(() => false);
  }

  public setEnableAddNote() {
    this.onAddNote.emit(this._isAddNoteEnabled)
  }

  public greetings() {
    alert("eg");
  }
}
