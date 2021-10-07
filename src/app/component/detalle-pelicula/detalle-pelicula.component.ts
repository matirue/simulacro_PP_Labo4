import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from './../../class/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  /********* */
  @Input()MostrarPelicula: Pelicula;
  /********* */

  constructor() { 
    this.MostrarPelicula = new Pelicula();
  }

  ngOnInit(): void {
  }

}
