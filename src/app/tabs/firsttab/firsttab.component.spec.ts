import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttabComponent } from './firsttab.component';

describe('FirsttabComponent', () => {
  let component: FirsttabComponent;
  let fixture: ComponentFixture<FirsttabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
