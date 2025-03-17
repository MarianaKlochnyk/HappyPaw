import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeadonatePage } from './makeadonate.page';

describe('MakeadonatePage', () => {
  let component: MakeadonatePage;
  let fixture: ComponentFixture<MakeadonatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeadonatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
