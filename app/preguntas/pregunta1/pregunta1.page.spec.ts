import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pregunta1Page } from './pregunta1.page';

describe('Pregunta1Page', () => {
  let component: Pregunta1Page;
  let fixture: ComponentFixture<Pregunta1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
