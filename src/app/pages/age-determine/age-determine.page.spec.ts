import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeDeterminePage } from './age-determine.page';

describe('AgeDeterminePage', () => {
  let component: AgeDeterminePage;
  let fixture: ComponentFixture<AgeDeterminePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeDeterminePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
