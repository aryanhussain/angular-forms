import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExplicitComponent } from './form-explicit.component';

describe('FormExplicitComponent', () => {
  let component: FormExplicitComponent;
  let fixture: ComponentFixture<FormExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
