import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Is3Component } from './is3.component';

describe('Is3Component', () => {
  let component: Is3Component;
  let fixture: ComponentFixture<Is3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Is3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Is3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
