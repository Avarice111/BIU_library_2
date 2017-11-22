import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoryModel } from './CategoryModel';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class CategoryHttpClient
// tslint:disable-next-line:one-line
{
   private categoriesUrl = 'api/categories';

   constructor(private http: HttpClient) {}

   getCategories (): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.categoriesUrl)
      .pipe(catchError(this.handleError('getCategories', []))
      );
    }
    getCategory(id: number): Observable < CategoryModel > {
        const url = `${this.categoriesUrl}/${id}`;
        return this.http.get<CategoryModel>(url).pipe(
          catchError(this.handleError<CategoryModel>(`getCategoryModel id=${id}`))
        );
      }
    getSubCategory(id: number, subCategories: string): Observable < CategoryModel > {
        const url = `${this.categoriesUrl}/${id}/${subCategories}`;
        return this.http.get<CategoryModel>(url).pipe(
          catchError(this.handleError<CategoryModel>(`getCategoryModel id=${id}`))
        );
      }

    addHero (category: CategoryModel): Observable<CategoryModel> {
        return this.http.post<CategoryModel>(this.categoriesUrl, category, httpOptions).pipe(
          catchError(this.handleError<CategoryModel>('addHero'))
        );
      }

      updateCategory (category: CategoryModel): Observable<any> {
        return this.http.put(this.categoriesUrl, category, httpOptions).pipe(
          catchError(this.handleError<any>('categoryHero'))
        );
      }

    deleteCategory (category: CategoryModel | number): Observable<CategoryModel> {
        const id = typeof category === 'number' ? category : category.id;
        const url = `${this.categoriesUrl}/${id}`;

        return this.http.delete<CategoryModel>(url, httpOptions).pipe(
         catchError(this.handleError<CategoryModel>('deleteCategory'))
        );
      }


    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          console.error(error); // log to console instead
          return of(result as T);
        };
      }
  }
