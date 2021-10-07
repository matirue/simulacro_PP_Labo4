import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePliActoresComponent } from './detalle-pli-actores.component';

describe('DetallePliActoresComponent', () => {
  let component: DetallePliActoresComponent;
  let fixture: ComponentFixture<DetallePliActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePliActoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePliActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
