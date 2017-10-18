import {HeaderComponentModel} from './model';

export class HeaderService {

  user = 'User1';
  mails = ['google mail', 'wp mail', 'spam mail', 'job offer mail'];
  news = ['Promocja - Kup dwie w cenie jednej', 'Tylko do konca tygodnia znizka 20%',
    'Spotkanie z J.K. Rowling', 'Przerwa swiateczna', 'Promocja - Kup dwie w cenie jednej',
    'Tylko do konca tygodnia znizka 20%', 'Spotkanie z J.K. Rowling', 'Przerwa swiateczna'];
  shoppingCart = ['Pan Tadeusz', 'Ania z wioski', 'Harry Potter', 'Polska w czasach okupacji'];
  _model: HeaderComponentModel =  new HeaderComponentModel(this.user, this.mails, this.news, this.shoppingCart);




  get model(): HeaderComponentModel {
    return this._model;
  }

  set model(value: HeaderComponentModel) {
    this._model = value;
  }

  constructor() {
  }
}
