import { CategoryModel } from './CategoryModel';
import { Observable } from 'rxjs/Observable';

export abstract class CategoriesService
{
    categoryUrl = 'api/category';

    abstract getCategories: Observable<CategoryModel>;
    abstract getCategory: Observable<CategoryModel>;
    abstract addCategory: Observable<CategoryModel>;
    abstract deleteCategories: Observable<CategoryModel>;
    abstract updateCategories: Observable<CategoryModel>;
}