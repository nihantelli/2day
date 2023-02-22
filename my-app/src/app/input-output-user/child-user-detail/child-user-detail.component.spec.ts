import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUserDetailComponent } from './child-user-detail.component';

describe('ChildUserDetailComponent', () => {
  let component: ChildUserDetailComponent;
  let fixture: ComponentFixture<ChildUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildUserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
