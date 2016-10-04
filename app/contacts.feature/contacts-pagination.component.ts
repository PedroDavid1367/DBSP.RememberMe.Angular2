import { Component, OnInit, OnChanges, ElementRef, Inject, 
  Input, Output, EventEmitter }                    from "@angular/core";
import { ContactsPaginationItemComponent }         from "./contacts-pagination-item.component";

@Component({
  selector: "contacts-pagination",
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
    <contacts-pagination-item *ngFor="let _pageData of paginationOptions.pagesData"
                              [clicked]="_pageData.selected"
                              [pageData]="_pageData"
                              (onSelect)="selectPage($event)">
    </contacts-pagination-item>
    <li class="waves-effect" (click)="moveRight()">
      <a><i class="material-icons">chevron_right</i></a>
    </li>
  </ul>
  `
})
export class ContactsPaginationComponent implements OnInit, OnChanges {

  // contactCount is going to be itemCount on re-factor step.
  @Input() public contactCount: number;
  @Input() public searchString: string;
  @Input() public filterType: string;
  @Output() private onPageClicked: EventEmitter<PageClickedEventArgs>;   
  private _pageSize: number;
  public paginationOptions: PaginationOptions;

  public constructor () {
    this.onPageClicked = new EventEmitter<PageClickedEventArgs>();
    this._pageSize = 4;
  }

  public ngOnInit () {
  }

  // Each time there's a change a new PaginationOptions object is created.
  public ngOnChanges () {
    this.paginationOptions = this.paginationOptionsFactory();
    if (this.paginationOptions !== null) {
      if (this.paginationOptions.pagesData.length > 0) {
        this.sendContactsToContainer(this.paginationOptions.pagesData[0].skip);
      }
    }
  }

  public storePageItems (pageItem: ContactsPaginationItemComponent) {
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
      // Send the number of skiped contacts.
      this.sendContactsToContainer(pd.skip);
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

  // This method needs a better name since it not just is fired when
  // a click's been made, it's also fired on the first ngOnChanges.
  private sendContactsToContainer(skip: number) {
    let pageClickedEventArgs = new PageClickedEventArgs();
    pageClickedEventArgs.skip = skip;
    pageClickedEventArgs.searchString = this.searchString;
    pageClickedEventArgs.filterType = this.filterType;
    this.onPageClicked.emit(pageClickedEventArgs);
  }

  // This should be in a service.
  private paginationOptionsFactory () {
    let paginationOptions = new PaginationOptions();
    let pageNumber = 0;
    if ((this.contactCount % this._pageSize) === 0 ) {
      pageNumber = this.contactCount / this._pageSize;  
    } else {
      pageNumber = Math.floor(this.contactCount / this._pageSize) + 1;
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

export class PageClickedEventArgs {
  public skip: number;
  public searchString: string;
  public filterType: string;
}