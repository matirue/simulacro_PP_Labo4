import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorAltaFormularioComponent } from './actor-alta-formulario.component';

describe('ActorAltaFormularioComponent', () => {
  let component: ActorAltaFormularioComponent;
  let fixture: ComponentFixture<ActorAltaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorAltaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorAltaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
