import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherRepoRdPage } from './weather-repo-rd.page';

describe('WeatherRepoRdPage', () => {
  let component: WeatherRepoRdPage;
  let fixture: ComponentFixture<WeatherRepoRdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRepoRdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
