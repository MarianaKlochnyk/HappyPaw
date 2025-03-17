import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignIn1Page } from './sign-in-1.page';

describe('SignIn1Page', () => {
  let component: SignIn1Page;
  let fixture: ComponentFixture<SignIn1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignIn1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
