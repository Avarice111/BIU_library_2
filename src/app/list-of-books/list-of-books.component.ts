import { Component, OnInit } from '@angular/core';
import { BookItem } from '../../view-models/BookItem';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {InMemBooksService} from '../books.inmemory.service';
import {BookService} from '../../in-memory/service/BookService';
import {BooksService} from './books.service';


@Component({
  selector: 'list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.css']
})
export class ListOfBooksComponent implements OnInit {

  listOfBooks= new Observable<BookItem[]>();
  category: string;
  isLoading= true;
  model: BookItem[]= [];

  constructor(private activatedRoute: ActivatedRoute, private booksService: BooksService) {

  }

  ngOnInit() {
    // subscribe to router event
  //   this.isLoading = true;

  //  // this.activatedRoute.params.subscribe((params: Params) => {
  //   //  this.category = params['category'];
  //     this.booksService.getBooks()
  //       .subscribe(items=>{
  //         this.model=items;
  //         this.isLoading=false;
  //       });
   /* });
    if (this.category != null)
    {
      if (this.category.length)
        // Podmieniamy liste książek na podstawie kategorii
        this.listOfBooks$ = BookService.getListOfBooksByCategory(this.category);
    }else{
        this.listOfBooks$ =   BookService.getListOfBooksByCategory(null);
    }


    this.listOfBooks$.subscribe(list => {
      this.model = list;
      this.isLoading = false;
    });
*/

  }

}
