import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Filter2Page } from './filter-2.page';

describe('Filter2Page', () => {
  let component: Filter2Page;
  let fixture: ComponentFixture<Filter2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Filter2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
