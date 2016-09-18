let Autolinker = require( "autolinker" );

import { Injectable} from '@angular/core';

@Injectable()
export class AutoLinkerService {

  private _autolinker: any;

  public constructor () {
    this._autolinker = new Autolinker();
    // let text = `Simply a domain: www.google.com
    //                   Domain with port: www.google.com:8000`;
    // var linkedText = autolinker.link(text);                                 
    // console.log(linkedText);
  }

  public setAnchors(content: string) {
    return this._autolinker.link(content); 
  }
}
