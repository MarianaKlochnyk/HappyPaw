import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Payment1Page } from './payment-1.page';

describe('Payment1Page', () => {
  let component: Payment1Page;
  let fixture: ComponentFixture<Payment1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Payment1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
