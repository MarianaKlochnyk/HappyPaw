import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewcardPage } from './addnewcard.page';

describe('AddnewcardPage', () => {
  let component: AddnewcardPage;
  let fixture: ComponentFixture<AddnewcardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
