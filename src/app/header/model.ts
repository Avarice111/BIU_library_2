export class HeaderComponentModel {

  private _user: String;
  private _mails: Array<String>;
  private _news: Array<String>;
  private _shoppingCart: Array<String>;

  public constructor(user: String, mails: Array<String>, news: Array<String>, shoppingCart: Array<String>) {
    this._user = user;
    this._mails = mails;
    this._news = news;
    this._shoppingCart = shoppingCart;
  }

  get user(): String {
    return this._user;
  }

  set user(value: String) {
    this._user = value;
  }

  get mails(): Array<String> {
    return this._mails;
  }

  set mails(value: Array<String>) {
    this._mails = value;
  }

  get news(): Array<String> {
    return this._news;
  }

  set news(value: Array<String>) {
    this._news = value;
  }

  get shoppingCart(): Array<String> {
    return this._shoppingCart;
  }

  set shoppingCart(value: Array<String>) {
    this._shoppingCart = value;
  }
}
