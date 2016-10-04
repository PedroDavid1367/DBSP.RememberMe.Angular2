import { Component, OnInit, ElementRef, Inject }  from "@angular/core";

@Component({
  selector: "notes-help",
  styles: [`
  .content {
    padding: 20px;
  }
  `],
  template: `
  <div class="blue-grey lighten-4 z-depth-1">
    <br />
    <h3 class="center-align">Notes Help Section</h3>
    <div class="content">
      Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, 
      iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.
    </div>
    <br />
  </div>
  `
})
export class NotesHelpComponent implements OnInit {

  public ngOnInit () {
  }
}
