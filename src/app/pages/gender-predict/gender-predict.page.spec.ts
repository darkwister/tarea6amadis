import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenderPredictPage } from './gender-predict.page';

describe('GenderPredictPage', () => {
  let component: GenderPredictPage;
  let fixture: ComponentFixture<GenderPredictPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderPredictPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
