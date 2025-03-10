import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonateForPetPage } from './donate-for-pet.page';

describe('DonateForPetPage', () => {
  let component: DonateForPetPage;
  let fixture: ComponentFixture<DonateForPetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateForPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
