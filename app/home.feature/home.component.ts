import { Component, ElementRef, OnInit }  from "@angular/core";
let $ = require("jquery");

@Component({
  selector: "home",
  template: `
  Home component<br />
  <input id="jqueryButton" type="button" class="btn" value="Click me" />
  <div id="jqueryDiv"></div>
  `
})
export class HomeComponent implements OnInit {

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {
    $(this._elRef.nativeElement).find("#jqueryButton")
      .on("click", () => $(this._elRef.nativeElement).find("#jqueryDiv").text("eg"));
  }
}

