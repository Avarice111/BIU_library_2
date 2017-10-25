import { Component, OnInit } from '@angular/core';
import { BookItem } from './BookItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  listOfAddedBooks = [
    new BookItem('http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg', 'Pan Tadeusz'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
