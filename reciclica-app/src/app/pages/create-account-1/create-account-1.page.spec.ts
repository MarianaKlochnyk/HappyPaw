import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAccount1Page } from './create-account-1.page';

describe('CreateAccount1Page', () => {
  let component: CreateAccount1Page;
  let fixture: ComponentFixture<CreateAccount1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccount1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
