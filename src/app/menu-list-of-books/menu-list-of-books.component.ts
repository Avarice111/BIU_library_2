import { Component, OnInit } from '@angular/core';
import {MenuListOfBooksModel} from './MenuListOfBooksModel';
import {BooksCategoriesService} from './BooksCategoriesService';
import {lifecycleHookToNodeFlag} from "@angular/compiler/src/view_compiler/provider_compiler";

@Component({
  selector: 'app-menu-list-of-books',
  templateUrl: './menu-list-of-books.component.html',
  styleUrls: ['./menu-list-of-books.component.css']
})
export class MenuListOfBooksComponent implements OnInit {

  listOfCategories: MenuListOfBooksModel[];


  constructor(private service: BooksCategoriesService) {

  }


  ngOnInit() {
    this.listOfCategories =  this.service.getListOfCategories();
  }

}
