import { Component, OnInit, OnChanges, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";
import { NotesPaginationItemComponent }            from "./notes-pagination-item.component";

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
        [ngClass]="{blue-grey: pageSelected}">
      <a>{{ pageData.index }}</a>
    </li>
    <li class="waves-effect"><a><i class="material-icons">chevron_right</i></a></li>
  </ul>-->

  <!--<ul class="pagination">
    <notes-pagination-item *ngFor="let _pageData of paginationOptions.pagesData"
                           [pageData]="_pageData"
                           (onSelect)="selectPage($event)">
    </notes-pagination-item>
  </ul>-->
  <ul class="pagination">
    <notes-pagination-item *ngFor="let _pageData of pagesData"
                           [pageData]="_pageData"
                           (onSelect)="selectPage($event)">
    </notes-pagination-item>
  </ul>
  `
})
export class NotesPaginationComponent implements OnInit, OnChanges {

  @Input() public noteCount: number;
  @Output() private onPageClicked: EventEmitter<number>;   
  private _pageSize: number;
  public paginationOptions: PaginationOptions;
  public pagesData: PageData[];

  public constructor () {
    this.onPageClicked = new EventEmitter<number>();
    this._pageSize = 4;
    this.pagesData = [];
  }

  public ngOnInit () {
  }

  public ngOnChanges () {
    this.paginationOptions = this.paginationOptionsFactory();
  }

  public storePageItems (pageItem: NotesPaginationItemComponent) {
    console.log(pageItem.pageData.index);
  }

  public selectPage (pageData: PageData) {
    // Reseting all PageData.selected to false.
    // this.paginationOptions.pagesData.forEach(pd => {
    //   pd.selected = false;
    // });

    for (let pd of this.pagesData) {
      pd.selected = false;
    }

    // Setting up selected PageData.selected to true.
    // this.paginationOptions.pagesData.filter(pd => {
    //   return pd.index == pageData.index;  
    // })
    // .map(pd => pd.selected = true);

    for (let pd of this.pagesData) {
      if (pd.index === pageData.index) {
        pd.selected = true;
        break;
      }
    }
  }

  public sendNotesToContainer(skip: number) {
    this.onPageClicked.emit(skip);
  }

  // This should be in a service.
  private paginationOptionsFactory () {
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
      pageData.selected = x == 0 ? true : false;
      pagesData[x] = pageData;
    }

    paginationOptions.pageNumber = pageNumber;
    paginationOptions.pagesData = pagesData;

    this.pagesData = pagesData;

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
  public selected: boolean; 
}