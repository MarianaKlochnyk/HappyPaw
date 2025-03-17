import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryOfDonationPage } from './history-of-donation.page';

describe('HistoryOfDonationPage', () => {
  let component: HistoryOfDonationPage;
  let fixture: ComponentFixture<HistoryOfDonationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
