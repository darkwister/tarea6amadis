import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorldUniversitiesPage } from './world-universities.page';

describe('WorldUniversitiesPage', () => {
  let component: WorldUniversitiesPage;
  let fixture: ComponentFixture<WorldUniversitiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldUniversitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
