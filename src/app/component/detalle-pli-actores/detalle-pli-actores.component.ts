import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/class/actor';
import { Pelicula } from 'src/app/class/pelicula';

@Component({
  selector: 'app-detalle-pli-actores',
  templateUrl: './detalle-pli-actores.component.html',
  styleUrls: ['./detalle-pli-actores.component.css']
})
export class DetallePliActoresComponent implements OnInit {

  @Input()MostrarPelicula: Pelicula;

  

  constructor() { 
    this.MostrarPelicula = new Pelicula();
  }

  ngOnInit(): void {
  }

}
