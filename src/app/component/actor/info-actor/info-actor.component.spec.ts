import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoActorComponent } from './info-actor.component';

describe('InfoActorComponent', () => {
  let component: InfoActorComponent;
  let fixture: ComponentFixture<InfoActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
