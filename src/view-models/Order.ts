import { BookItem } from './BookItem';
export class Order
{
    public OrderId: number;
    public Books: BookItem[];
    public Date: Date;
    public UserId: number;

    constructor(OrderId: number,Books: BookItem[], Date: Date, UserId: number)
    {
        this.OrderId = OrderId;
        this.Books = Books;
        this.Date = Date;
        this.UserId = UserId;
    }


}
