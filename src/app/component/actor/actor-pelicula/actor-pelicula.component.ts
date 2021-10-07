import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/class/actor';
import { Pelicula } from 'src/app/class/pelicula';
import { AltaService } from 'src/app/service/alta.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  listaDePeliculas!: Pelicula[];
  seleccionDePeli!: Pelicula;

  listaDeActores!: Actor[];
  actorElegido!: Actor;

  constructor(private auth: AltaService) { }

  ngOnInit(): void {

    this.auth.getAllPeliculas().subscribe( (peli: Pelicula[]) => {
      this.listaDePeliculas = peli;
    });

    this.auth.getAllActores().subscribe( (act: Actor[]) => {
      this.listaDeActores = act;
    });
  }

  /** Metodos */
  PushPelicula(pelicula: Pelicula){
    this.listaDePeliculas.push(pelicula);
    console.log(' >>>>PushPelicula ', pelicula);
  }

  MostrarSeleccionDePelicula(pelicula: Pelicula){
    this.seleccionDePeli = pelicula;
    console.log(' >>>>MostrarSeleccionDePelicula', this.seleccionDePeli);
  }
  /****************/
  MostrarActores(actor: Actor){
    this.actorElegido = actor;
  }

}
