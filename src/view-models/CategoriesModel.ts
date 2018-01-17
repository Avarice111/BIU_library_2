
export class CategoriesModel{
  public name: string;
  public parentCategories: string[]

  constructor(name: string, parentCategories: string[]) {
    this.name = name;
    this.parentCategories = parentCategories;
  }
}
