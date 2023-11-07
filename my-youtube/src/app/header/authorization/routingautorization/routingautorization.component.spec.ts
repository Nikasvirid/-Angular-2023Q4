import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingautorizationComponent } from './routingautorization.component';

describe('RoutingautorizationComponent', () => {
  let component: RoutingautorizationComponent;
  let fixture: ComponentFixture<RoutingautorizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingautorizationComponent]
    });
    fixture = TestBed.createComponent(RoutingautorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
