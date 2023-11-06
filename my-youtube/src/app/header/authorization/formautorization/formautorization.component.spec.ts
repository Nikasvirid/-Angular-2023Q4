import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormautorizationComponent } from './formautorization.component';

describe('FormautorizationComponent', () => {
  let component: FormautorizationComponent;
  let fixture: ComponentFixture<FormautorizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormautorizationComponent]
    });
    fixture = TestBed.createComponent(FormautorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
