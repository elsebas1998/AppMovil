import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pregunta3Page } from './pregunta3.page';

describe('Pregunta3Page', () => {
  let component: Pregunta3Page;
  let fixture: ComponentFixture<Pregunta3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
