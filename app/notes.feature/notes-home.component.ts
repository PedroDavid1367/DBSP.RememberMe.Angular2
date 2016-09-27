import { Component }                from "@angular/core";
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";
import { SearchStringEventArgs }    from "./notes-filter-item.component";
import { Note }                                    from "./note.model";
import { AddNoteArgs }                             from "./notes-add-item.component";

@Component({
  selector: 'notes-home',
  styles: [`

  `],
  template: `
  <div class="col s12 m4">
    <div class="col s12 offset-m1">
      <notes-help></notes-help>

      <!-- The Event onOpenAddNoteSection is generated when notes-manager component is clicked -->
      <!-- $event is a boolean -->
      <notes-manager (onOpenAddNoteSection)="setIsAddNoteSectionEnabled($event)"
                     (onOpenFilterNoteSection)="setIsFilterNoteSectionEnabled($event)"
                     (onSendSearchString)="toNotesContainer($event)">               
      </notes-manager>

      <notes-filter-container *ngIf="isFilterNoteSectionEnabled"
                    (onCloseFilterNoteSection)="setIsFilterNoteSectionEnabled($event)"
                    (onSendSearchString)="toNotesContainer($event)">                   
      </notes-filter-container>

      <notes-item-container [isAddNoteSectionEnabled]="isAddNoteSectionEnabled"
                            [searchString]="searchString"
                            [filterType]="filterType"
                            (onCloseAddNoteSection)="setIsAddNoteSectionEnabled($event)">                   
      </notes-item-container>
    </div>
  </div>

  <div class="col s12 m8">
    <div class="col s12">
      <notes-detail-container [note]="testedNote"
                              (onAddNote)="sendToNotesItemContainer($event)">                   
      </notes-detail-container>
    </div>
  </div>
  `
})
export class NotesHomeComponent {

  public isAddNoteSectionEnabled: boolean;
  public isFilterNoteSectionEnabled: boolean;
  public searchString: string;
  public filterType: string;
  public testedNote: Note; 

  // Sending search for all notes (default).
  public constructor () {
    this.searchString = "";
    this.filterType = "Title";
    this.testedNote = new Note("", "", "", "", "");
  }

  public setIsAddNoteSectionEnabled (isAddNoteSectionEnabled: boolean) {
    this.isAddNoteSectionEnabled = isAddNoteSectionEnabled;
  }

  public setIsFilterNoteSectionEnabled (isFilterNoteSectionEnabled: boolean) {
    this.isFilterNoteSectionEnabled = isFilterNoteSectionEnabled;
  }

  public toNotesContainer (searchStringEventArgs: SearchStringEventArgs) {
    this.searchString = searchStringEventArgs.searchString;
    this.filterType = searchStringEventArgs.filterType;
  }

  public sendToNotesItemContainer (addNoteArgs: AddNoteArgs) {
    
  }
}
