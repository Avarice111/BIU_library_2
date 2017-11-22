import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BookItem } from '../../view-models/BookItem';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  public getBooks():Observable<BookItem>{
    let books = [
      {
          id:1,
          imgUrl: "http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg",
          title: "test 1",
          isbn: 1234
      },
      
      {
          id:2,
          imgUrl: "http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg",
          title: "test 2",
          isbn: 1234
      }
  ];
    return Observable.from(books).delay(5000);
      
  }

}
