import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoptedPetPage } from './adopted-pet.page';

describe('AdoptedPetPage', () => {
  let component: AdoptedPetPage;
  let fixture: ComponentFixture<AdoptedPetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptedPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
