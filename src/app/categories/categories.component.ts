import { Component, OnInit } from '@angular/core';
import {CategoriesModel} from '../../view-models/CategoriesModel';
import {BooksCategoriesService} from '../../view-models/BooksCategoriesService';
import {ThrobberComponent} from '../throbber/throbber.component';
import { CategoryService } from './category.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  
  listOfCategories = new Observable<CategoriesModel[]>();
  public isLoading: boolean;

  model: CategoriesModel[];


  constructor(private service: CategoryService) {
  }

  ngOnInit() {

    this.isLoading = true;
    this.service.getCategories().subscribe(
      items => 
      {
        this.model = items;
        this.isLoading = false;
      }
    );
    
  }

}
