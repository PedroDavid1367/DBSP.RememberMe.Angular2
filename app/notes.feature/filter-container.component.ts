import { Component, OnInit, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: "filter-container",
  styles: [`
  .ng-valid[required] {
    border-bottom: 1px solid #42A948; /* green */
  }
  .ng-invalid {
    border-bottom: 1px solid #a94442; /* red */
  }
  .dbsp-filter-container {
    padding: 10px;
  }
  `],
  template: `
  <div class="dbsp-filter-container z-depth-4">
    <div>
      <form (ngSubmit)="submit()" #filterForm="ngForm">
        <div class="row">
          <div class="input-field col s6">
            <select id="select-filter">
              <option value="Title">Title</option>
              <option value="Category">Category</option>
              <option value="Priority">Priority</option>
              <option value="Content">Content</option>
            </select>
            <label>Filter options</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="search" type="text" class="validate" required
                    [(ngModel)]="searchString" name="search"
                    #search="ngModel">  
            <label for="search" data-error="invalid" data-success="valid">Filtered word</label>
            <div [hidden]="search.valid || search.untouched" 
                  class="alert alert-danger">
              <sup style="color:red;">A word for filtering is required</sup>
            </div>
          </div>
        </div>

        <div class="row">
          <input class="btn-flat" type="submit" [disabled]="!filterForm.form.valid" value="Filter" />
          <input class="btn-flat" type="button" value="Reset" (click)="reset()" />
          <input class="btn-flat" type="button" value="Close" (click)="close()" />
        </div>
      </form>
    </div>
  </div>
  `
})
export class FilterContainerComponent implements OnInit {

  @Output() private onCloseFilterNoteSection: EventEmitter<boolean>;
  @Output() private onSendSearchString: EventEmitter<SearchStringEventArgs>;
  public searchString: string;
  public filterType: string;
  private _isFilterNoteSectionEnabled: boolean;

  public constructor (private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onCloseFilterNoteSection = new EventEmitter<boolean>();
    this.onSendSearchString = new EventEmitter<SearchStringEventArgs>();
    this.searchString = "";
    this.filterType = "Title";
    this._isFilterNoteSectionEnabled = false;
  }

  public ngOnInit () {
    this.$(this._elRef.nativeElement)
      .find("#select-filter").material_select();
  }

  public submit () {
    let filterType = this.$(this._elRef.nativeElement)
      .find("#select-filter option:selected").val();
    console.log(filterType);
    console.log(this.searchString);
    let searchStringEventArgs = new SearchStringEventArgs();
    searchStringEventArgs.filterType = filterType;
    searchStringEventArgs.searchString = this.searchString;
    this.onSendSearchString.emit(searchStringEventArgs);
  }

  public reset () {
    this.searchString = "";
  }

  public close () {
    this.onCloseFilterNoteSection.emit(this._isFilterNoteSectionEnabled);
  }
}

export class SearchStringEventArgs {
  public searchString: string;
  public filterType: string;
}
