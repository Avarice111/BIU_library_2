import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CategoriesModel } from '../../view-models/CategoriesModel';


@Injectable()
export class CategoryService
{
    constructor(private http: Http){}

    public getCategories():Observable<CategoriesModel[]>{
   
        return this.http
          .get("http://localhost:54730/api/Category")
          .map(r=>r.json());
          
      }
    
      public addCategory(category:CategoriesModel):Observable<any>{
        return this.http
          .post("http://localhost:54730/api/Category",category);
      }
}