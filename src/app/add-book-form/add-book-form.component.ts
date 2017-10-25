import { Component, OnInit } from '@angular/core';
import {BooksCategoriesService} from "../menu-list-of-books/BooksCategoriesService";
import {MenuListOfBooksModel} from "../menu-list-of-books/MenuListOfBooksModel";
import {NewBook} from "./NewBook";

@Component({

  selector: 'add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {



  public listOfCategories: MenuListOfBooksModel[];
  public listOfTags: string[];
  public selectedCategories: string[];
  public listOfSubcategories:string[];

  private _isSubCategoriesVissible: boolean;

  public book= new NewBook();

  constructor(private service: BooksCategoriesService) { }

  ngOnInit() {
    this.listOfCategories = this.service.getListOfCategories();
  }

}
