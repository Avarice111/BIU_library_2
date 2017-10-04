import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  public model = {
    title:"NG-Book",
    author:{
      name:"John Snnow"
    },
    letters:["a","b", "c", "d"]
  }


  constructor() { }

  ngOnInit() {
  }

}
