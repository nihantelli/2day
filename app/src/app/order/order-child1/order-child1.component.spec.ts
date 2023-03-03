import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderChild1Component } from './order-child1.component';

describe('OrderChild1Component', () => {
  let component: OrderChild1Component;
  let fixture: ComponentFixture<OrderChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderChild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
