import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPeliculaFormularioComponent } from './alta-pelicula-formulario.component';

describe('AltaPeliculaFormularioComponent', () => {
  let component: AltaPeliculaFormularioComponent;
  let fixture: ComponentFixture<AltaPeliculaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPeliculaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPeliculaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
