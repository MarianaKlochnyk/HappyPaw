import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAccount2Page } from './create-account-2.page';

describe('CreateAccount2Page', () => {
  let component: CreateAccount2Page;
  let fixture: ComponentFixture<CreateAccount2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccount2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
