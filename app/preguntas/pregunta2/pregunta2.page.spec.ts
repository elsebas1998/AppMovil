import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pregunta2Page } from './pregunta2.page';

describe('Pregunta2Page', () => {
  let component: Pregunta2Page;
  let fixture: ComponentFixture<Pregunta2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
