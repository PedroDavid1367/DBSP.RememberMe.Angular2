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

  <li class="waves-effect" (click)="selectPage()">
    <a>{{ pageData.index }}</a>
  </li>
  `
})
export class NotesPaginationItemComponent implements OnInit, OnChanges {

  @Input() public pageData: PageData;
  @Output() private onSelect: EventEmitter<PageData>;

  public constructor (private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onSelect = new EventEmitter<PageData>();
  }

  public ngOnInit () {

  }

  public ngOnChanges () {
    console.log(this.pageData);
    if (this.pageData.selected) {
      this.$(this._elRef.nativeElement)
      .find("a").addClass("active blue-grey lighten-1");
    } else {
      this.$(this._elRef.nativeElement)
      .find("a").removeClass("active blue-grey lighten-1");
    }
  }

  public selectPage () {
    this.onSelect.emit(this.pageData);
  }
}
