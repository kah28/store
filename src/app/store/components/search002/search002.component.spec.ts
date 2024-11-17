import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search002Component } from './search002.component';

describe('Search002Component', () => {
  let component: Search002Component;
  let fixture: ComponentFixture<Search002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Search002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
