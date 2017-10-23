import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PatternValidator } from '@angular/forms';
import { PersonalDataModel } from './model';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public personalData = new PersonalDataModel(null,null,null);

  constructor() { }

  ngOnInit() {
  }

}
