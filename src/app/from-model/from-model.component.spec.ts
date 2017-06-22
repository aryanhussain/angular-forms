import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromModelComponent } from './from-model.component';

describe('FromModelComponent', () => {
  let component: FromModelComponent;
  let fixture: ComponentFixture<FromModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
