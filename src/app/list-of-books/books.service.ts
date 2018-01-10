import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BookItem } from '../../view-models/BookItem';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  public getBooks():Observable<BookItem[]>{
   
    return this.http
      .get("http://localhost:54730/api/Books")
      .map(r=>r.json());
      
  }

}
