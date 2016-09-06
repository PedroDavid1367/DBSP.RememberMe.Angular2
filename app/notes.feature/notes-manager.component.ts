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
    <a href="#" class="collection-item waves-effect waves-teal" 
       (click)="openAddNoteSection()">Add note</a>
    <a href="#" class="collection-item waves-effect waves-teal">Filter notes</a>
  </div>
  `
})
export class NotesManagerComponent implements OnInit {

  @Output() private onOpenAddNoteSection: EventEmitter<boolean> = new EventEmitter<boolean>();
  private _isAddNoteSectionEnabled: boolean = true;

  public constructor(private _elRef: ElementRef,
    @Inject("$") private $: any) {
  }
  
  // Disabling native click event so that anchor element 
  // is not able to navigate to "#" 
  public ngOnInit() {
    this.$(this._elRef.nativeElement)
      .find("a").click(() => false);
  }

  public openAddNoteSection() {
    this.onOpenAddNoteSection.emit(this._isAddNoteSectionEnabled)
  }
}
