import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import * as EventEmitter from 'node:events';
import { Pelicula } from './../../class/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})


export class TablaPeliculaComponent implements OnInit {

  @Input()listaDePeliculas!: Pelicula[];
  @Output()seleccionPelicula: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  SeleccionarUnaPelicula(peli: Pelicula){
    this.seleccionPelicula.emit(peli);
    console.log('>>>>SeleccionarUnaPelicula', peli);
  }
}
