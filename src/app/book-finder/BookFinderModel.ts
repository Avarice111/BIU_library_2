import { CategoriesModel } from '../categories/CategoriesModel';

export class BookFinderModel
{

    public title: string;
    public author: string;
    public tag: string;
    public genre: CategoriesModel;
    public availability: boolean;

    constructor(title: string, author: string, tag: string, genre: CategoriesModel, availability: boolean)
    {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.availability = availability;
    }
}
