import { Component, OnInit } from '@angular/core';
import { Message } from './Message';

@Component({
  selector: 'list-of-messages',
  templateUrl: './list-of-messages.component.html',
  styleUrls: ['./list-of-messages.component.css']
})
export class ListOfMessagesComponent implements OnInit {


  listOfMessages = [
    new Message('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', 'Pan Tadeusz', 'Powitanie', '08.11.17'),
    new Message('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', 'Geralt z Rivii', 'Ciri szukam', '08.11.17'),
    new Message('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', 'Mistrz', 'ELo', '08.11.17'),
    new Message('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', 'Stanisław Wokulski', 'Iza...', '08.11.17'),
  ];


  constructor() { }

  ngOnInit() {
  }

}
