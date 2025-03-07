import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuportiveServicePage } from './suportive-service.page';

describe('SuportiveServicePage', () => {
  let component: SuportiveServicePage;
  let fixture: ComponentFixture<SuportiveServicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuportiveServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
