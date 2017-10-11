import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-of-books',
  templateUrl: './list-of-books.component.html',
  styleUrls: ['./list-of-books.component.css']
})
export class ListOfBooksComponent implements OnInit {


  listOfBooks= [
    {imgUrl: "http://ecsmedia.pl/c/pan-tadeusz-b-iext44008692.jpg", title: "Pan Tadeusz"},
    {imgUrl: "http://ecsmedia.pl/c/ogniem-i-mieczem-b-iext43064008.jpg", title: "Ogniem i Mieczem"},
    {imgUrl: "http://www.unreal-fantasy.pl/gfx/users/1950072231.jpg", title: "Mistrz i Małŋorzata"},
    {imgUrl: "http://smart.aanomaly.net/wp-content/uploads/2014/12/lalka-boleslaw-prus.jpg", title: "Lalka"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
