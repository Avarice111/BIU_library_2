
import {NewBook} from "./add-book-form/NewBook";

export class BookService {

  private _book: NewBook;
  private _listOfBooks: NewBook[];


  public createBook(): NewBook {
    return new NewBook();
  }
}

export interface IBookBuilder {
  setTitle(title: string): void;
  setIsbn(isbn: number): void;
  setAuthor(author: string): void;
  getResult(): NewBook;
}

export class BookBuilder implements IBookBuilder {

  private book: NewBook;
  setTitle(title: string): void {
  }

  setIsbn(isbn: number): void {
  }

  setAuthor(author: string): void {
  }

  getResult(): NewBook {
    return this.book;
  }
}
export class BookBuilderDirector {
  static construct(author: string, isbn: number, title: string): NewBook {
    let book = new BookBuilder();
    book.setAuthor(author);
    book.setIsbn(isbn);
    book.setTitle(title);

    return book.getResult();
  }
}


