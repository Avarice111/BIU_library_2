import {CategoriesModel} from './CategoriesModel';
import {Injectable} from '@angular/core';


@Injectable()
export class BooksCategoriesService {

  public  getListOfCategories(): CategoriesModel[] {
    return [
      new CategoriesModel ('Nauka', ['Programowanie', 'Chemia'] ),
      new CategoriesModel( 'Historia', ['Średniowecze', 'Renesans' , 'Współczesność'] ),
      new CategoriesModel('Sztuka', ['Średniowecze', 'Renesans' , 'Współczesność'] )
    ];
  }


}
