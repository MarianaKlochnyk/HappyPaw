import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Filter1Page } from './filter-1.page';

describe('Filter1Page', () => {
  let component: Filter1Page;
  let fixture: ComponentFixture<Filter1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Filter1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
