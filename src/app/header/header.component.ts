import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }

  user = 'User1';
  mails = ['google mail', 'wp mail', 'spam mail', 'job offer mail'];
  news = ['Promocja - Kup dwie w cenie jednej', 'Tylko do konca tygodnia znizka 20%', 'Spotkanie z J.K. Rowling', 'Przerwa swiateczna', 'Promocja - Kup dwie w cenie jednej', 'Tylko do konca tygodnia znizka 20%', 'Spotkanie z J.K. Rowling', 'Przerwa swiateczna'];
  zakupy= ['Pan Tadeusz', 'Ania z wioski', 'Harry Potter', 'Polska w czasach okupacji'];

}
