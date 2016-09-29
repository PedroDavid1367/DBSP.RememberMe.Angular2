import { Component, OnInit, ElementRef, Inject,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";
import { SearchStringEventArgs }                   from "./notes-filter-item.component";

@Component({
  selector: "filter-container",
  styles: [`
  `],
  template: `
  <div class="z-depth-4">
    <div class="input-field col s12">
      <select id="select-filter">
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <label>Materialize Select</label>
    </div>

    <br />
    <div class="row">
      <div class="input-field col s12">
        <input class="btn blue-grey lighten-2 right" type="button" value="Show" 
              (click)="eg()" />
        <input class="btn blue-grey lighten-2 right" type="button" value="Close" 
              (click)="closeNotesFilterSection()" />
      </div>
    </div>
    <br />
  </div>
  `
})
export class FilterContainerComponent implements OnInit {

  @Output() private onCloseFilterNoteSection: EventEmitter<boolean>;
  @Output() private onSendSearchString: EventEmitter<SearchStringEventArgs>;
  private _isFilterNoteSectionEnabled: boolean;

  public constructor (private _elRef: ElementRef,
    @Inject("$") private $: any) {

    this.onCloseFilterNoteSection = new EventEmitter<boolean>();
    this.onSendSearchString = new EventEmitter<SearchStringEventArgs>();
    this._isFilterNoteSectionEnabled = false;
  }

  public ngOnInit () {
    this.$(this._elRef.nativeElement)
      .find("#select-filter").material_select();
  }

  public eg () {
    let test = this.$(this._elRef.nativeElement)
      .find("#select-filter option:selected").text();
    console.log(test);
  }

  public closeNotesFilterSection () {
    this.onCloseFilterNoteSection.emit(this._isFilterNoteSectionEnabled);
  }

  public sendSearchString (searchStringEventArgs: SearchStringEventArgs) {
    this.onSendSearchString.emit(searchStringEventArgs);
  }
}
