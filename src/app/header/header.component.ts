import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = 'User1';
  mails = ['google mail', 'wp mail', 'spam mail', 'job offer mail'];
  news = ['Promocja - Kup dwie w cenie jednej', 'Tylko do konca tygodnia znizka 20%',
    'Spotkanie z J.K. Rowling', 'Przerwa swiateczna', 'Promocja - Kup dwie w cenie jednej',
    'Tylko do konca tygodnia znizka 20%', 'Spotkanie z J.K. Rowling', 'Przerwa swiateczna'];
  shoppingCart = ['Pan Tadeusz', 'Ania z wioski', 'Harry Potter', 'Polska w czasach okupacji'];

  model = new HeaderComponentModel(this.user, this.mails, this.news, this.shoppingCart);

  ngOnInit(): void {
  }

}




class HeaderComponentModel {

  user: String;
  mails: Array<String>;
  news: Array<String>;
  shoppingCart: Array<String>;

  constructor(user: String, mails: Array<String>, news: Array<String>, shoppingCart: Array<String>) {
    this.user = user;
    this.mails = mails;
    this.news = news;
    this.shoppingCart = shoppingCart;
  }

}
