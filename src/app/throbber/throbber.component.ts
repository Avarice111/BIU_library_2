import { Component, OnInit } from '@angular/core';
import {Visibility} from "tslint/lib/rules/completedDocsRule";

@Component({
  selector: 'app-throbber',
  templateUrl: './throbber.component.html',
  styleUrls: ['./throbber.component.css']
})
export class ThrobberComponent implements OnInit {

  private _isVissible: boolean;

  constructor() { }


  get isVissible(): boolean {
    return this._isVissible;
  }

  ngOnInit() {
    this._isVissible = true;
    //TODO to trzeba wyrzucić bo będzie automatycznie znikal
    setTimeout(() =>
      {
       this.setThrobberVisibility(false);
      },
      3000);
  }

  public setThrobberVisibility(isVisible: boolean){
    this._isVissible = isVisible;
  }




}
