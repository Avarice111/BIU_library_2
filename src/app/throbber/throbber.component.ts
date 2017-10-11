import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-throbber',
  templateUrl: './throbber.component.html',
  styleUrls: ['./throbber.component.css']
})
export class ThrobberComponent implements OnInit {

  @Input()
  public isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.isVisible = true;
  }


}
