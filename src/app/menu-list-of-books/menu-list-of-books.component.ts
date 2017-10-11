import { Component, OnInit } from '@angular/core';
import {MenuListOfBooksModel} from './MenuListOfBooksModel';
import {BooksCategoriesService} from './BooksCategoriesService';
import {ThrobberComponent} from '../throbber/throbber.component';

@Component({
  selector: 'app-menu-list-of-books',
  templateUrl: './menu-list-of-books.component.html',
  styleUrls: ['./menu-list-of-books.component.css']
})
export class MenuListOfBooksComponent implements OnInit {

  listOfCategories: MenuListOfBooksModel[];
  public isLoading: boolean;


  constructor(private service: BooksCategoriesService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.listOfCategories =  this.service.getListOfCategories();
    this.isLoading = false;
  }

}
