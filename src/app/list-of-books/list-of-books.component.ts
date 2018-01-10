import { Component, OnInit } from '@angular/core';
import { BookItem } from '../../view-models/BookItem';
import {ActivatedRoute, Params} from '@angular/router';
import { BooksService } from './books.service';

@Component({
  selector: 'list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.css']
})
export class ListOfBooksComponent implements OnInit {

  listOfBooks: BookItem[];
   public static LIST_OF_BOOKS = [
    new BookItem('http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg', 'Pan Tadeusz', 1),
    new BookItem('http://ecsmedia.pl/c/ogniem-i-mieczem-b-iext43064008.jpg', 'Ogniem i Mieczem', 2),
    new BookItem('http://www.unreal-fantasy.pl/gfx/users/1950072231.jpg', 'Mistrz i Małŋorzata', 3),
    new BookItem('http://smart.aanomaly.net/wp-content/uploads/2014/12/lalka-boleslaw-prus.jpg', 'Lalka', 4),
  ];

  category: string;

  constructor(private activatedRoute: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.category = params['category'];
      this.booksService.getBooks()
        .subscribe(items=>this.listOfBooks=items);
    });



    if (this.category != null)
    {
      if (this.category.length)
        // Podmieniamy liste książek na podstawie kategorii
        this.listOfBooks = this.getListOfBooksByCategory(this.category);
    }
  }

  public getListOfBooksByCategory(category: any) {
    // TODO trzeba zrobić filtrowanie
    return ListOfBooksComponent.LIST_OF_BOOKS;
  }


}
