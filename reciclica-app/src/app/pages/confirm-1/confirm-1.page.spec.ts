import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Confirm1Page } from './confirm-1.page';

describe('Confirm1Page', () => {
  let component: Confirm1Page;
  let fixture: ComponentFixture<Confirm1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirm1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
