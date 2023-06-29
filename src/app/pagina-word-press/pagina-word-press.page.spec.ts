import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaWordPressPage } from './pagina-word-press.page';

describe('PaginaWordPressPage', () => {
  let component: PaginaWordPressPage;
  let fixture: ComponentFixture<PaginaWordPressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaWordPressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
