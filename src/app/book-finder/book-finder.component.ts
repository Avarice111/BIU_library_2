import { Component, OnInit } from '@angular/core';
import { BookFinderModel } from './BookFinderModel';

@Component({
  selector: 'app-book-finder',
  templateUrl: './book-finder.component.html',
  styleUrls: ['./book-finder.component.css']
})
export class BookFinderComponent implements OnInit {

  finderModel: BookFinderModel;
  constructor() { }

  ngOnInit() {
  }

}
