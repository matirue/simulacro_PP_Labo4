import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/class/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  @Input() listaActores!: Actor[];
  @Output() actorElegido_evento: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  click_SeleccionDeActor(actor: Actor){
    this.actorElegido_evento.emit(actor);
  }

}
