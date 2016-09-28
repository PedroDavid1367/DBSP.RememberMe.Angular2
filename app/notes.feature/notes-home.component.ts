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
                            [noteToAdd]="noteToAdd"
                            (onCloseAddNoteSection)="setIsAddNoteSectionEnabled($event)">                   
      </notes-item-container>
    </div>
  </div>

  <div class="col s12 m8">
    <div class="col s12">
      <notes-detail-container [isAddNoteSectionEnabled]="isAddNoteSectionEnabled"
                              [note]="noteToDisplay"
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
  public noteToDisplay: Note;
  public noteToAdd: Note; 

  // Sending search for all notes (default).
  public constructor () {
    // The default is the add notes view opened when the app is started.
    this.isAddNoteSectionEnabled = true;
    this.searchString = "";
    this.filterType = "Title";
    this.noteToDisplay = new Note("", "", "", "", "");
    //this.noteToAdd = new Note("", "", "", "", "");
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
    // Closing the add note view either because a note has been submitted or canceled.
    this.isAddNoteSectionEnabled = false;
    if (addNoteArgs.note) {
      this.noteToAdd = addNoteArgs.note;
      this.noteToDisplay = addNoteArgs.note;
    }
  }
}
