let Autolinker = require( "autolinker" );

import { Injectable}  from '@angular/core';

@Injectable()
export class AutoLinkerService {

  private _autolinker: any;

  public constructor () {
    this._autolinker = new Autolinker();
  }

  public setAnchors (content: string) {
    return this._autolinker.link(content); 
  }
}
