import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterInfoLocationPage } from './shelter-info-location.page';

describe('ShelterInfoLocationPage', () => {
  let component: ShelterInfoLocationPage;
  let fixture: ComponentFixture<ShelterInfoLocationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterInfoLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
