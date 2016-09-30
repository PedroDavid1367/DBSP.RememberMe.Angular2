import { Component }                from "@angular/core";
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";
import { SearchStringEventArgs }    from "./notes-filter-item.component";
import { Note }                                    from "./note.model";

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

      <notes-item-container [searchString]="searchString"
                            [filterType]="filterType"
                            [noteToAdd]="noteToAdd"
                            [noteToDelete]="noteToDelete"
                            [noteToEdit]="noteToEdit"
                            (onNoteSelected)="sendToNotesDetailContainer($event)">                   
      </notes-item-container>
    </div>
  </div>

  <div class="col s12 m8">
    <div class="col s12">
      <filter-container *ngIf="isFilterNoteSectionEnabled"
                        (onCloseFilterNoteSection)="setIsFilterNoteSectionEnabled($event)"
                        (onSendSearchString)="toNotesContainer($event)">
      </filter-container>

      <br />

      <!--<notes-filter-container *ngIf="isFilterNoteSectionEnabled"
                    (onCloseFilterNoteSection)="setIsFilterNoteSectionEnabled($event)"
                    (onSendSearchString)="toNotesContainer($event)">                   
      </notes-filter-container>-->

      <notes-detail-container [isAddNoteSectionEnabled]="isAddNoteSectionEnabled"
                              [note]="noteToDisplay"
                              (onAddNote)="sendAddNoteArgsToNotesItemContainer($event)"
                              (onDeleteNote)="sendNoteToNotesItemContainer($event)"
                              (onEditNote)="sendNoteToNotesItemContainerForEditing($event)">                   
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
  public noteToDelete: Note;
  public noteToEdit: Note; 

  // Sending search for all notes (default).
  public constructor () {
    this.searchString = "";
    this.filterType = "Title";
    this.noteToDisplay = new Note("", "", "", "", "");
  }

  public setIsAddNoteSectionEnabled (isAddNoteSectionEnabled: boolean) {
    // Reseting noteToDisplay to default value (it will prevent the note detail being displayed). 
    this.noteToDisplay = new Note("", "", "", "", "");
    // Enabling add note section.
    this.isAddNoteSectionEnabled = isAddNoteSectionEnabled;
  }

  public setIsFilterNoteSectionEnabled (isFilterNoteSectionEnabled: boolean) {
    this.isFilterNoteSectionEnabled = isFilterNoteSectionEnabled;
  }

  public toNotesContainer (searchStringEventArgs: SearchStringEventArgs) {
    this.searchString = searchStringEventArgs.searchString;
    this.filterType = searchStringEventArgs.filterType;
  }

  public sendAddNoteArgsToNotesItemContainer (note: Note) {
    // Disabling add note section because a note has been created.
    this.isAddNoteSectionEnabled = false;
    this.noteToAdd = note;
    this.noteToDisplay = note;
  }

  public sendNoteToNotesItemContainer (note: Note) {
    // Reseting noteToDisplay to default value (it will prevent the note detail being displayed). 
    this.noteToDisplay = new Note("", "", "", "", "");
    this.noteToDelete = note;
  }

  public sendToNotesDetailContainer (note: Note) {
    this.isAddNoteSectionEnabled = false;
    this.noteToDisplay = note;
  }

  public sendNoteToNotesItemContainerForEditing (note: Note) {
    this.noteToEdit = note;
  }
}
