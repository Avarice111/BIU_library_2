import { Component, OnInit } from '@angular/core';
import {CategoriesModel} from '../../view-models/CategoriesModel';
import {BooksCategoriesService} from '../../view-models/BooksCategoriesService';
import {ThrobberComponent} from '../throbber/throbber.component';
import { CategoryHttpClient } from './CategoryHttpClient';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: CategoriesModel[];
  


  constructor(private httpClient: CategoryHttpClient) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.httpClient.getCategories()
    .subscribe(categories => this.categories = categories);
  }

}
