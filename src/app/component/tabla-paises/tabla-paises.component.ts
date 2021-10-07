import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pais } from './../../class/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input()listaDePaises!: any[];
  @Output()paisElegido_evento: EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  
  ngOnInit(): void {
  }

  click_PaisElegido(pais: Pais){
    this.paisElegido_evento.emit(pais);
    console.log("Click_PaisElegido >> ", this.paisElegido_evento);
  }

}
