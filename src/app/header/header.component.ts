import { Component, OnInit } from '@angular/core';
import {HeaderService} from './service';
import {HeaderComponentModel} from './model';


@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: HeaderService = new HeaderService();
  model: HeaderComponentModel = this.header._model;


  ngOnInit(): void {
  }

}
