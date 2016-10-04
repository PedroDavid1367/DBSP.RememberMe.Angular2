import { Component, ElementRef, OnInit }  from "@angular/core";
import { OidcTokenManagerService }        from "../common.services/oidc-token-manager.service";

@Component({
  selector: "user-info",
  styles: [`
  .dbsp-content {
    height: 300px;
    padding: 20px;
  }
  `],
  template: `
  <div class="dbsp-content blue-grey lighten-5 z-depth-1">
    <br />
    <h3 class="center-align">User Information</h3>
    <div *ngIf="!mgr.expired">
      Name: {{ mgr.profile.given_name }}<br /> 
      Last Name: {{ mgr.profile.family_name }}<br />
      Address: {{ mgr.profile.address }}<br />
      Role: {{ mgr.profile.role }}<br />
    </div>
    <div *ngIf="mgr.expired">
      Welcome Unknown user.
    </div>
    <br />
  </div>
  `
})
export class UserInfoComponent implements OnInit {

  public mgr: any;

  constructor(private _oidcmanager: OidcTokenManagerService) {

    this.mgr = this._oidcmanager.mgr;
  }

  public ngOnInit() {
  }
}

