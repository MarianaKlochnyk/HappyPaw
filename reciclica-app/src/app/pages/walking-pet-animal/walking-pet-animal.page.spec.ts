import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalkingPetAnimalPage } from './walking-pet-animal.page';

describe('WalkingPetAnimalPage', () => {
  let component: WalkingPetAnimalPage;
  let fixture: ComponentFixture<WalkingPetAnimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingPetAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
