import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdtabComponent } from './thirdtab.component';

describe('ThirdtabComponent', () => {
  let component: ThirdtabComponent;
  let fixture: ComponentFixture<ThirdtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
