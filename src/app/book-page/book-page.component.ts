import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailedBookItem} from '../../domain/DetailedBookItem';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  public detailedBook: DetailedBookItem ;

  constructor(private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.route.params.subscribe(p => console.log(p.bookid));

  }

}
