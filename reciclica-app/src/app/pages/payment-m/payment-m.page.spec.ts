import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentMPage } from './payment-m.page';

describe('PaymentMPage', () => {
  let component: PaymentMPage;
  let fixture: ComponentFixture<PaymentMPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
