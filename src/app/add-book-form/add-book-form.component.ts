import {Component, OnInit} from '@angular/core';
import {BooksCategoriesService} from "../../domain/BooksCategoriesService";
import {CategoriesModel} from "../../domain/CategoriesModel";
import {DetailedBookItem} from "../../domain/DetailedBookItem";

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

  public book = new DetailedBookItem('imgUrl', 'tite', 'description');

  constructor(private service: BooksCategoriesService) {
  }

  ngOnInit() {
    this.listOfCategories = this.service.getListOfCategories();
  }

}
