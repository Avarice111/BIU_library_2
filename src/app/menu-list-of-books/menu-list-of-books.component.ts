import { Component, OnInit } from '@angular/core';
import {MenuListOfBooksModel} from './menu-list-of-books-model';


@Component({
  selector: 'app-menu-list-of-books',
  templateUrl: './menu-list-of-books.component.html',
  styleUrls: ['./menu-list-of-books.component.css']
})
export class MenuListOfBooksComponent implements OnInit {

  listOfCategories= [
    new MenuListOfBooksModel ('Nauka', ['Programowanie', 'Chemia'] ),
    new MenuListOfBooksModel( 'Historia', ['Średniowecze', 'Renesans' , 'Współczesność'] ),
    new MenuListOfBooksModel('Sztuka', ['Średniowecze', 'Renesans' , 'Współczesność'] )
  ];

  constructor() {

  }


  ngOnInit() {

  }

}
