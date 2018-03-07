import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtabComponent } from './secondtab.component';

describe('SecondtabComponent', () => {
  let component: SecondtabComponent;
  let fixture: ComponentFixture<SecondtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
