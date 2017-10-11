import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListOfBooksComponent } from './menu-list-of-books.component';
import {MenuListOfBooksModel} from './menu-list-of-books-model';

describe('MenuListOfBooksComponent', () => {
  let component: MenuListOfBooksComponent;
  let fixture: ComponentFixture<MenuListOfBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListOfBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListOfBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
