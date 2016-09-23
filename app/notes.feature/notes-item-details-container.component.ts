import { Component, OnInit, ElementRef, Inject, OnChanges,
  Input, Output, EventEmitter }                    from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model";
import { NotesSharedItemsDateilsService }          from "./notes-shared-items-details.service";
import { Router, ActivatedRoute, Params }          from "@angular/router";

@Component({
  selector: "notes-item-details-container",
  template: `
  <notes-item-details [note]="activeNote">
  </notes-item-details>
  `
})
export class NotesItemDetailsContainerComponent {

  public activeNote: Note;

  private _notesAddItemEnabled: boolean;

  constructor(private _notesService: NotesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _notesSharedItemsDateils: NotesSharedItemsDateilsService) {

    this.activeNote = new Note("", "", "", "", "");
  }

  public ngOnInit () {
    this._activatedRoute.params.forEach((params: Params) => {
      let id = +params["id"];
      this._notesService
        .getNote(id)
        .subscribe(note => {
          this.activeNote = note;
        })
    });
  }

  // ngOnInit() {
  //   this.route.params.forEach((params: Params) => {
  //      let id = +params['id']; // (+) converts string 'id' to a number
  //      this.service.getHero(id).then(hero => this.hero = hero);
  //    });
  // }
}
