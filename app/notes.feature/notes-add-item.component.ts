import { Component, Input, Output, EventEmitter,
  ElementRef, Inject, OnInit }  from "@angular/core";
import { Note }                                    from "./note.model";

@Component({
  selector: 'notes-add-item',
  styles: [`
  .ng-valid[required] {
    border-bottom: 1px solid #42A948; /* green */
  }

  .ng-invalid {
    border-bottom: 1px solid #a94442; /* red */
  }
  `],
  template: `
  {{ diagnostic }}
  <br />
  <br />
  <div class="row z-depth-4" [hidden]="submitted">
    <form class="col s12" *ngIf="active" (ngSubmit)="onSubmit()" #noteForm="ngForm">
      <div class="row">
        <div class="input-field col s12">
          <input id="title" type="text" class="validate" required
                 [(ngModel)]="_model.Title" name="title"
                 #name="ngModel">  
          <label for="title" data-error="invalid" data-success="valid">Title</label>
          <div [hidden]="name.valid" 
               class="alert alert-danger">
            <sup>Name is required</sup>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="content" class="materialize-textarea"
                    [(ngModel)]="_model.Content" name="content"></textarea>
          <label for="content">Content</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m6">
          <input id="category" type="text" class="validate" required
                 [(ngModel)]="_model.Category" name="category">
          <label for="category" data-error="invalid" data-success="valid">Category</label>
        </div>
        <div class="input-field col s12 m6">
          <input id="category" type="number" class="validate" required
                 [(ngModel)]="_model.Priority" name="priority">
          <label for="priority" data-error="invalid" data-success="valid">Priority</label>
        </div>
      </div>
      <div class="row">
        <input class="btn-flat" type="submit" [disabled]="!noteForm.form.valid" value="Save" />
        <input class="btn-flat" type="button" value="Reset note" />
        <input class="btn-flat" type="button" value="Cancel" />
      </div>
    </form>
  </div>
  `
})
export class NotesAddItemComponent implements OnInit {

  @Output() public addNoteEmitter: EventEmitter<Note> = new EventEmitter<Note>(); 

  private _model: Note = new Note("", "", "", "", "");
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.addNoteEmitter.emit(this._model);
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  resetNote() {
    this._model = new Note("", "", "", "", "");
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  public ngOnInit() {
  }

  private get diagnostic(): string {
    return JSON.stringify(this._model);
  }
}
