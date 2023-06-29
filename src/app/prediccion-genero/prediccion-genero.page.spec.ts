import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrediccionGeneroPage } from './prediccion-genero.page';

describe('PrediccionGeneroPage', () => {
  let component: PrediccionGeneroPage;
  let fixture: ComponentFixture<PrediccionGeneroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrediccionGeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
