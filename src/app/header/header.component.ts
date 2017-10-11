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

}
