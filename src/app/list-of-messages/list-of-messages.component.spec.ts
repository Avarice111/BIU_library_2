import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMessagesComponent } from './list-of-messages.component';

describe('ListOfMessagesComponent', () => {
  let component: ListOfMessagesComponent;
  let fixture: ComponentFixture<ListOfMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
