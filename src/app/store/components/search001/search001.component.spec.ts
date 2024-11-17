import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search001Component } from './search001.component';

describe('Search001Component', () => {
  let component: Search001Component;
  let fixture: ComponentFixture<Search001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Search001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
