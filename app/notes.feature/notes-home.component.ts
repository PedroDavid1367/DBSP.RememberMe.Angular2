import { Component }                from "@angular/core";
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";

@Component({
  selector: 'notes-home',
  styles: [`

  `],
  template: `
  <div class="col s12 m4">
    <div class="col s12 offset-m1">
      <h1 class="center-align">Options</h1>
      <br />
      <notes-manager (onAddNote)="addNoteToListComponent($event)">               
      </notes-manager>
    </div>
  </div>

  <div class="col s12 m8">
    <div class="col s12">
      <notes-container [isAddNoteEnabled]="_isAddNoteEnabled"
                       (onAddNoteComponentClosed)="handleAddNoteComponentClosed($event)">                   
      </notes-container>
    </div>
  </div>
  `
})
export class NotesHomeComponent {

  private _isAddNoteEnabled: boolean;

  public addNoteToListComponent(isAddNoteEnabled: boolean) {
    this._isAddNoteEnabled = isAddNoteEnabled;
  }

  public handleAddNoteComponentClosed(noteComponentClosed: boolean) {
    this._isAddNoteEnabled = noteComponentClosed;
  }
}
