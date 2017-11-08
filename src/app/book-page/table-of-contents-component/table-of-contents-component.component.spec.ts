import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfContentsComponentComponent } from './table-of-contents-component.component';

describe('TableOfContentsComponentComponent', () => {
  let component: TableOfContentsComponentComponent;
  let fixture: ComponentFixture<TableOfContentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfContentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
