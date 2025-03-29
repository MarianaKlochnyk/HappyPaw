import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPassword1Page } from './forgot-password-1.page';

describe('ForgotPassword1Page', () => {
  let component: ForgotPassword1Page;
  let fixture: ComponentFixture<ForgotPassword1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassword1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
