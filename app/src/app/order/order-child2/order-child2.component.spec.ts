import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderChild2Component } from './order-child2.component';

describe('OrderChild2Component', () => {
  let component: OrderChild2Component;
  let fixture: ComponentFixture<OrderChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
