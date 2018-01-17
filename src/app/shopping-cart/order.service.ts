import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BookItem } from '../../view-models/BookItem';
import { Order } from '../../view-models/Order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  public getOrder():Observable<Order>{

    return this.http
      .get("http://localhost:54730/api/order/GetOrder")
      .map(r=>r.json());
  }

  // public addBoook(book:BookItem):Observable<any>{
  //   return this.http
  //     .post("http://localhost:54730/api/Books",book);
  // }
}
