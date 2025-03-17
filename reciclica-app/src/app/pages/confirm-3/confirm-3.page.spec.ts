import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Confirm3Page } from './confirm-3.page';

describe('Confirm3Page', () => {
  let component: Confirm3Page;
  let fixture: ComponentFixture<Confirm3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirm3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
