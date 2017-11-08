import { Component, OnInit } from '@angular/core';
import {CategoriesModel} from './CategoriesModel';
import {BooksCategoriesService} from './BooksCategoriesService';
import {ThrobberComponent} from '../throbber/throbber.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  listOfCategories: CategoriesModel[];
  public isLoading: boolean;


  constructor(private service: BooksCategoriesService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.listOfCategories =  this.service.getListOfCategories();
    this.isLoading = false;
  }

}
