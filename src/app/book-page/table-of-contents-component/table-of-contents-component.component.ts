import {Component, Input, OnInit} from '@angular/core';
import {TableOfContents} from '../../../view-models/TableOfContents';

@Component({
  selector: 'app-table-of-contents-component',
  templateUrl: './table-of-contents-component.component.html',
  styleUrls: ['./table-of-contents-component.component.css']
})
export class TableOfContentsComponentComponent implements OnInit {

  @Input() public tableOfContents: TableOfContents;

  constructor() {
  }

  ngOnInit() {
  }

}
