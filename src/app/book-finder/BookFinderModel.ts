//import { CategoriesModel } from '..categories/CategoriesModel';

export class BookFinderModel
{
    constructor(
        public title?: string,
        public author?: string,
        public tag?: string,
       // public genre?: CategoriesModel,
        public availability?: boolean,
    ){}
}
