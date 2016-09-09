import { Component, OnInit, OnChanges, ElementRef, Inject, DoCheck,
  Input, Output, EventEmitter }                    from "@angular/core";
import { PageData }                                from "./contacts-pagination.component";

@Component({
  selector: "contacts-pagination-item",
  styles: [`
  `],
  template: `
  <li class="waves-effect" (click)="selectPage()">
    <a>{{ pageData.index }}</a>
  </li>
  `
})
export class ContactsPaginationItemComponent implements OnInit, OnChanges {

  @Input() public clicked: boolean;
  @Input() public pageData: PageData;
  @Output() private onSelect: EventEmitter<PageData>;

  public constructor (private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onSelect = new EventEmitter<PageData>();
  }

  public ngOnInit () {
  }

  public ngOnChanges () {
    if (this.clicked) {
      this.$(this._elRef.nativeElement)
      .find("a").addClass("active blue-grey lighten-2");
    } else {
      this.$(this._elRef.nativeElement)
      .find("a").removeClass("active blue-grey lighten-2");
    }
  }

  public selectPage () {
    this.onSelect.emit(this.pageData);
  }
}
