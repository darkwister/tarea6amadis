import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordpressLastestPage } from './wordpress-lastest.page';

describe('WordpressLastestPage', () => {
  let component: WordpressLastestPage;
  let fixture: ComponentFixture<WordpressLastestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressLastestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
