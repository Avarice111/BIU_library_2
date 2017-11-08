import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CategoriesComponent} from './categories.component';
import {ThrobberComponent} from '../throbber/throbber.component';
import {CategoriesModel} from '../../view-models/CategoriesModel';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
