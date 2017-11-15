import { Component, OnInit } from '@angular/core';
import {BooksCategoriesService} from "../categories/BooksCategoriesService";
import {CategoriesModel} from "../categories/CategoriesModel";
import {NewBook} from "./NewBook";
import {BookBuilderDirector} from "../BookService";
import {showWarningOnce} from "tslint/lib/error";

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

  private _book = BookBuilderDirector.construct("test" ,5 ,"test" );


  get book(): NewBook {
    return this._book;
  }

  constructor(private service: BooksCategoriesService) { }

  ngOnInit() {
    this.listOfCategories = this.service.getListOfCategories();
  }

}
