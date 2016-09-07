import { Component, OnInit, OnChanges, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: "notes-pagination",
  styles: [`
  li {
    cursor:pointer;
  }
  .blue-grey {
    background-color: red;
  }
  `],
  template: `
  Diagnostic: noteCount = {{ noteCount }} <br />
  Diagnostic: noteCount = {{ paginationOptions | json }}
  <!--<ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li class="active blue-grey lighten-1"><a href="#!">1</a></li>
    <li class="waves-effect"><a href="#!">2</a></li>
    <li class="waves-effect"><a href="#!">3</a></li>
    <li class="waves-effect"><a href="#!">4</a></li>
    <li class="waves-effect"><a href="#!">5</a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>-->

  <!--<ul class="pagination">
    <li class="disabled"><a><i class="material-icons">chevron_left</i></a></li>
    <li *ngFor="let pageData of paginationOptions.pagesData"
        (click)="sendNotesToContainer(pageData.skip)" 
        [ngClass]="{blue-grey: pageClicked}">
      <a>{{ pageData.index }}</a>
    </li>
    <li class="waves-effect"><a><i class="material-icons">chevron_right</i></a></li>
  </ul>-->

  <ul class="pagination">
    <notes-pagination-item *ngFor="let _pageData of paginationOptions.pagesData"
                           [pageData]="_pageData"
                           >
    </notes-pagination-item>
  </ul>
  `
})
export class NotesPaginationComponent implements OnInit, OnChanges {

  @Input() public noteCount: number;
  @Output() private onPageClicked: EventEmitter<number>;   
  private _pageSize: number;
  public paginationOptions: PaginationOptions;
  // Maybe li should be a new component
  public pageClicked: boolean;

  public constructor() {
    this.onPageClicked = new EventEmitter<number>();
    this._pageSize = 4;
  }

  public ngOnInit() {
  }

  public ngOnChanges () {
    this.paginationOptions = this.paginationOptionsFactory();
  }

  public sendNotesToContainer(skip: number) {
    this.pageClicked = true;
    this.onPageClicked.emit(skip);
  }

  // This should be in a service.
  private paginationOptionsFactory() {
    let paginationOptions = new PaginationOptions();

    let pageNumber = 0;
    if ((this.noteCount % this._pageSize) === 0 ) {
      pageNumber = this.noteCount / this._pageSize;  
    } else {
      pageNumber = Math.floor(this.noteCount / this._pageSize) + 1;
    }

    let pagesData: PageData[] = [];
    for (let x = 0; x < pageNumber; x++) {
      let pageData = new PageData();
      pageData.index = x + 1;
      pageData.skip = x * this._pageSize;
      pagesData[x] = pageData;
    }

    paginationOptions.pageNumber = pageNumber;
    paginationOptions.pagesData = pagesData;

    return paginationOptions;
  }
}

class PaginationOptions {
  public pageNumber: number;
  public pagesData: PageData[];
}

export class PageData {
  public index: number;
  public skip: number; 
}