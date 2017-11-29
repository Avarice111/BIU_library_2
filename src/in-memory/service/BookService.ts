import {DetailedBookItem} from '../../view-models/DetailedBookItem';
import {Observable} from "rxjs/Observable";
import {ListOfBooksComponent} from "../../app/list-of-books/list-of-books.component";
import {BookItem} from "../../view-models/BookItem";

export class BookService {

  public static LIST_OF_BOOKS = [
    new BookItem('http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg', 'Pan Tadeusz', 1),
    new BookItem('http://ecsmedia.pl/c/ogniem-i-mieczem-b-iext43064008.jpg', 'Ogniem i Mieczem', 2),
    new BookItem('http://www.unreal-fantasy.pl/gfx/users/1950072231.jpg', 'Mistrz i Małŋorzata', 3),
    new BookItem('http://smart.aanomaly.net/wp-content/uploads/2014/12/lalka-boleslaw-prus.jpg', 'Lalka', 4),
  ];

  public static getListOfBooksByCategory(category: any): Observable <BookItem[]> {
    // TODO trzeba zrobić filtrowanie
    return Observable.of(BookService.LIST_OF_BOOKS).delay(5000);
  }



  getBook(id: number): DetailedBookItem{

    return null;


  }

}
