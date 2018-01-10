import  { Injectable} from '@angular/core';
import  { Http,Headers, RequestOptions, Response } from '@angular/http';
import { CategoriesModel } from '../../view-models/CategoriesModel';


@Injectable()
export class CategoryService
{
    constructor(private http: Http) {}

    getAll()
    {
        return this.http.get('http://localhost:4200'+'/api/category').map((response: Response) => response.json());
    }

    getById(_id: string)
    {
        return this.http.get('http://localhost:4200'+'/api/category' + _id).map((response: Response) => response.json());
    }

    create(category: CategoriesModel)
    {
        return this.http.post('http://localhost:4200'+'/api/category', category);
    }

    update(category: CategoriesModel)
    {
        return this.http.put('http://localhost:4200'+'/api/category/'+ category.name,category);
    }

    delete(category:CategoriesModel)
    {
        return this.http.delete('http://localhost:4200'+'/api/category/'+ category.name);
    }
}