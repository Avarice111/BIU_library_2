import { Component, OnInit } from '@angular/core';
import { BookItem } from '../../domain/BookItem';

@Component({
  selector: 'list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.css']
})
export class ListOfBooksComponent implements OnInit {


  listOfBooks = [
    new BookItem('http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg', 'Pan Tadeusz'),
    new BookItem('http://ecsmedia.pl/c/ogniem-i-mieczem-b-iext43064008.jpg', 'Ogniem i Mieczem'),
    new BookItem('http://www.unreal-fantasy.pl/gfx/users/1950072231.jpg', 'Mistrz i Małŋorzata'),
    new BookItem('http://smart.aanomaly.net/wp-content/uploads/2014/12/lalka-boleslaw-prus.jpg', 'Lalka'),
  ];


  constructor() { }

  ngOnInit() {
  }

}
