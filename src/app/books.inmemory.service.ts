import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemBooksService implements InMemoryDbService {
  createDb() {
    let books = [
        {
            id:1,
            imgUrl: "http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg",
            title: "test 1",
            isbn: 1234
        },
        
        {
            id:2,
            imgUrl: "http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg",
            title: "test 2",
            isbn: 1234
        }
    ];
    return {books};
  }
}