import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalkingPetPage } from './walking-pet.page';

describe('WalkingPetPage', () => {
  let component: WalkingPetPage;
  let fixture: ComponentFixture<WalkingPetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
