import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticDebitComponent } from './automatic-debit.component';

describe('AutomaticDebitComponent', () => {
  let component: AutomaticDebitComponent;
  let fixture: ComponentFixture<AutomaticDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticDebitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
