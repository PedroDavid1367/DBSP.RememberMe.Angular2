import { Component, OnInit, OnChanges, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";
import { PageData }  from "./notes-pagination.component";

@Component({
  selector: "notes-pagination-item",
  styles: [`
  `],
  template: `
  <!--<li *ngFor="let pageData of paginationOptions.pagesData"
      (click)="sendNotesToContainer(pageData.skip)" 
      [ngClass]="{blue-grey: pageClicked}">
    <a>{{ pageData.index }}</a>
  </li>-->

  <li (click)="eg()">
    <a>{{ pageData.index }}</a>
  </li>
  `
})
export class NotesPaginationItemComponent {

  @Input() public pageData: PageData;

  public constructor(private _elRef: ElementRef,
    @Inject("$") private $: any) {
  }

  // public ngOnInit() {
  //   this.$(this._elRef.nativeElement)
  //     .find("a").click(() => false);
  // }

  public eg () {
    this.$(this._elRef.nativeElement)
      .find("a").addClass("active blue-grey lighten-1");
  } 
}
