import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Confirm2Page } from './confirm-2.page';

describe('Confirm2Page', () => {
  let component: Confirm2Page;
  let fixture: ComponentFixture<Confirm2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
