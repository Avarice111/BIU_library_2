import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemBookService implements InMemoryDbService {

  createDb() {
    const ser = [
      {
        id: 1,
        imgUrl: 'imgUrl1', title: 'title1', isbn: 1, author: 'autor1', description: 'desc1', tags: ['tag1', 'tag2'],
        categorys: ['cat1', 'cat2'], subCategories: ['subcat1', 'subcat2']
      },
      {
        id: 2,
        imgUrl: 'imgUrl2',
        title: 'title2',
        isbn: 1,
        author: 'autor2',
        description: 'desc2',
        tags: ['tag1', 'tag2'],
        categorys: ['cat1', 'cat2'],
        subCategories: ['subcat1', 'subcat2']
      },
      {
        id: 3,
        imgUrl: 'imgUrl3',
        title: 'title3',
        isbn: 1,
        author: 'autor3',
        description: 'desc3',
        tags: ['tag1', 'tag2'],
        categorys: ['cat1', 'cat2'],
        subCategories: ['subcat1', 'subcat2']
      },
      {
        id: 5,
        imgUrl: 'imgUrl4',
        title: 'title4',
        isbn: 1,
        author: 'autor4',
        description: 'desc4',
        tags: ['tag1', 'tag2'],
        categorys: ['cat1', 'cat2'],
        subCategories: ['subcat1', 'subcat2']
      },
    ];
    return {ser};
  }
}
