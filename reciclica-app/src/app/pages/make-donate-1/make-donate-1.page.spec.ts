import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeDonate1Page } from './make-donate-1.page';

describe('MakeDonate1Page', () => {
  let component: MakeDonate1Page;
  let fixture: ComponentFixture<MakeDonate1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDonate1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
