import {BookItem} from './BookItem';
import {TableOfContents} from './TableOfContents';

export class DetailedBookItem extends BookItem
{

  public readonly author: string;
  public readonly description: string;
  public tags: string[];
  public categorys: string[];
  public subCategories: string[];
  // Spis treści
  public tabOfCont: TableOfContents[];


  public constructor(imgUrl: string, title: string, description: string,tab:TableOfContents[], isbn: number) {
    super(imgUrl, title, isbn );
    this.description = description;
    this.tags = ['tag1', 'tag2'];
    this.categorys = ['categorys1', 'categorys2'];
    this.subCategories = ['subCategories1', 'subCategories2'];
    this.tabOfCont = tab;
  }
}
