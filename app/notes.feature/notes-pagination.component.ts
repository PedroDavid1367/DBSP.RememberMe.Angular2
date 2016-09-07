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
  <ul class="pagination">
    <li class="waves-effect" (click)="moveLeft()">
      <a><i class="material-icons">chevron_left</i></a>
    </li>
    <notes-pagination-item *ngFor="let _pageData of paginationOptions.pagesData"
                           [clicked]="_pageData.selected"
                           [pageData]="_pageData"
                           (onSelect)="selectPage($event)">
    </notes-pagination-item>
    <li class="waves-effect" (click)="moveRight()">
      <a><i class="material-icons">chevron_right</i></a>
    </li>
  </ul>
  `
})
export class NotesPaginationComponent implements OnInit, OnChanges {

  @Input() public noteCount: number;
  @Output() private onPageClicked: EventEmitter<number>;   
  private _pageSize: number;
  public paginationOptions: PaginationOptions;

  public constructor () {
    this.onPageClicked = new EventEmitter<number>();
    this._pageSize = 4;
  }

  public ngOnInit () {
  }

  public ngOnChanges () {
    this.paginationOptions = this.paginationOptionsFactory();
    if (this.paginationOptions !== null) {
      if (this.paginationOptions.pagesData.length > 0) {
        this.sendNotesToContainer(this.paginationOptions.pagesData[0].skip);
      }
    }
  }

  public storePageItems (pageItem: NotesPaginationItemComponent) {
    console.log(pageItem.pageData.index);
  }

  public selectPage (pageData: PageData) {
    // Reseting all PageData.selected to false.
    this.paginationOptions.pagesData.forEach(pd => {
      pd.selected = false;
    });

    // Setting up selected PageData.selected to true.
    this.paginationOptions.pagesData.filter(pd => {
      return pd.index == pageData.index;  
    })
    .map(pd => {
      pd.selected = true;
      // Send the number of skiped notes.
      this.sendNotesToContainer(pd.skip);
    });
  }

  public moveLeft () {
    let selectedPageData: PageData;
    this.paginationOptions.pagesData.filter(pd => {
      return pd.selected == true;
    })
    .map(pd => selectedPageData = pd);
    if (selectedPageData.index > 1) {
      let leftPageData: PageData = this.paginationOptions
        .pagesData[selectedPageData.index - 2];
      this.selectPage(leftPageData);
    }
  }

  public moveRight () {
    let selectedPageData: PageData;
    this.paginationOptions.pagesData.filter(pd => {
      return pd.selected == true;
    })
    .map(pd => selectedPageData = pd);
    if (selectedPageData.index < this.paginationOptions
        .pagesData.length) {
      let rightPageData: PageData = this.paginationOptions
        .pagesData[selectedPageData.index];
      this.selectPage(rightPageData);
    }
  }

  private sendNotesToContainer(skip: number) {
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