import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailedBookItem} from '../../view-models/DetailedBookItem';
import {TableOfContents} from '../../view-models/TableOfContents';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  public detailedBook: DetailedBookItem ;

  constructor(private route: ActivatedRoute) {

  }

s
  ngOnInit() {
    this.route.params.subscribe(p => console.log(p.bookid));
    const jeden = new TableOfContents('podkategoria1', null);
    const dwa = new TableOfContents('podkategoria2', null);
    const data = [jeden, dwa ];
    const glowna = new TableOfContents('glowna', data);
    const aa: TableOfContents[] = [glowna, jeden ];
    this.detailedBook = new DetailedBookItem(
      'http://cdn3.thumbs.common.smcloud.net/common/2/4/s/2401776Ajla.jpg/ru-1-r-640,0-n-2401776Ajla.jpg',
      'Szpony i kły', 'Opis', aa  );


  }

}
