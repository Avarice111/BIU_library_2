export class BookItem
{
    public imgUrl: string;
    public title: string;
    public isbn: number;

    constructor(imgUrl: string, title: string, isbn: number)
    {
        this.imgUrl = imgUrl;
        this.title = title;
        this.isbn = isbn;
    }


}
