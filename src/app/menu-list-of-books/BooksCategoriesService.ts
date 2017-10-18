

import {MenuListOfBooksModel} from './MenuListOfBooksModel';
import {Injectable} from '@angular/core';
@Injectable()
export class BooksCategoriesService {

  public  getListOfCategories(): MenuListOfBooksModel[] {
    //Tutaj będzie import prawdziwej listy
    //TODO wywalić statyczność

    return [
      new MenuListOfBooksModel ('Nauka', ['Programowanie', 'Chemia'] ),
      new MenuListOfBooksModel( 'Historia', ['Średniowecze', 'Renesans' , 'Współczesność'] ),
      new MenuListOfBooksModel('Sztuka', ['Średniowecze', 'Renesans' , 'Współczesność'] )
    ];
  }


}
