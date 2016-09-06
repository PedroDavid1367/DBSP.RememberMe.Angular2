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
      <!-- The Event onOpenAddNoteSection is generated when notes-manager component is clicked -->
      <!-- $event is a boolean -->
      <notes-manager (onOpenAddNoteSection)="setIsAddNoteSectionEnabled($event)">               
      </notes-manager>
    </div>
  </div>

  <div class="col s12 m8">
    <div class="col s12">
      <notes-container [isAddNoteSectionEnabled]="_isAddNoteSectionEnabled"
                       (onCloseAddNoteSection)="setIsAddNoteSectionEnabled($event)">                   
      </notes-container>
    </div>
  </div>
  `
})
export class NotesHomeComponent {

  public _isAddNoteSectionEnabled: boolean;

  public setIsAddNoteSectionEnabled(isAddNoteSectionEnabled: boolean) {
    this._isAddNoteSectionEnabled = isAddNoteSectionEnabled;
  }
}
