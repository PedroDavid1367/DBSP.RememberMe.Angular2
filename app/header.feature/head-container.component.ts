import { Component, ElementRef, OnInit }  from "@angular/core";
import { OidcTokenManagerService }        from "../common.services/oidc-token-manager.service";

@Component({
  selector: "head-container",
  styles: [`
  .dbsp-header {
    height: 300px;
    padding: 20px;
  }
  `],
  template: `
  <div class="dbsp-header blue-grey lighten-5 z-depth-1">
    <br />
    <h3 class="center-align">Logo and/or Reminder carousel</h3>
  </div>
  `
})
export class HeadContainerComponent implements OnInit {

  public mgr: any;

  constructor(private _oidcmanager: OidcTokenManagerService) {

    this.mgr = this._oidcmanager.mgr;
  }

  ngOnInit() {
  }
}

