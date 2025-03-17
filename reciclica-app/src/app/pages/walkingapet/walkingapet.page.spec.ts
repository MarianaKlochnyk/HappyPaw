import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalkingapetPage } from './walkingapet.page';

describe('WalkingapetPage', () => {
  let component: WalkingapetPage;
  let fixture: ComponentFixture<WalkingapetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingapetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
