import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentmethodsPage } from './paymentmethods.page';

describe('PaymentmethodsPage', () => {
  let component: PaymentmethodsPage;
  let fixture: ComponentFixture<PaymentmethodsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmethodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
