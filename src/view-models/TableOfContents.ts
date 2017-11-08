export class TableOfContents
{
  public name: string;
  public listOfSubContents: TableOfContents[];

  constructor(name: string, listOfSubContents: TableOfContents[])
  {
    this.name = name;
    this.listOfSubContents = listOfSubContents;
  }


}
