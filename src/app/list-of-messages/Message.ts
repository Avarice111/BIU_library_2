export class Message
{
    public imgUrl: string;
    public author: string;
    public title: string;
    public adddate: string;

    constructor(imgUrl: string, author: string, title: string, adddate: string)
    {
        this.imgUrl = imgUrl;
        this.author = author;
        this.title = title;
        this.adddate = adddate;
    }


}
