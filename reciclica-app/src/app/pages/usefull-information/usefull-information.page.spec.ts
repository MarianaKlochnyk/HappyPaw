import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsefullInformationPage } from './usefull-information.page';

describe('UsefullInformationPage', () => {
  let component: UsefullInformationPage;
  let fixture: ComponentFixture<UsefullInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefullInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
