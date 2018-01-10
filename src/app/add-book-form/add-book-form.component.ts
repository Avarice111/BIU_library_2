import {Component, OnInit} from '@angular/core';
import {BooksCategoriesService} from '../../view-models/BooksCategoriesService';
import {CategoriesModel} from '../../view-models/CategoriesModel';
import {DetailedBookItem} from '../../view-models/DetailedBookItem';
import { BooksService } from '../list-of-books/books.service';
import { BookItem } from '../../view-models/BookItem';

@Component({

  selector: 'add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {



  public book :BookItem =new BookItem(`http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg`,"",0);

  constructor(private service: BooksCategoriesService,
            private booksService: BooksService) {
  }

  ngOnInit() {
  }

  public save():void{
    this.booksService.addBoook(this.book)
    .subscribe(r=>console.log(r));
  }

}
