import {Component, OnInit} from '@angular/core';
import {BooksCategoriesService} from '../../view-models/BooksCategoriesService';
import {CategoriesModel} from '../../view-models/CategoriesModel';
import {DetailedBookItem} from '../../view-models/DetailedBookItem';

@Component({

  selector: 'add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {


  public listOfCategories: CategoriesModel[];
  public listOfTags: string[];
  public selectedCategories: string[];
  public listOfSubcategories: string[];

  private _isSubCategoriesVissible: boolean;

  public book = new DetailedBookItem('imgUrl', 'tite', 'description', null , 1);

  constructor(private service: BooksCategoriesService) {
  }

  ngOnInit() {
    this.listOfCategories = this.service.getListOfCategories();
  }

}
