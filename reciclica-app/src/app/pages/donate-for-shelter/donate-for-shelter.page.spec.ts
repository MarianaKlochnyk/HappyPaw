import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonateForShelterPage } from './donate-for-shelter.page';

describe('DonateForShelterPage', () => {
  let component: DonateForShelterPage;
  let fixture: ComponentFixture<DonateForShelterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateForShelterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
