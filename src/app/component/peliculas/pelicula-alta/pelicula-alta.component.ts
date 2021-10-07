import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/class/actor';
import { Pelicula } from 'src/app/class/pelicula';
import { AltaService } from 'src/app/service/alta.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  @Input()listaPelicula!: Pelicula[];

  listaDeActores!: Actor[];
  actorElegido!: Actor;

  constructor( private auth: AltaService) { }

  ngOnInit(): void {
    this.auth.getAllActores().subscribe( (act: Actor[]) => {
      this.listaDeActores = act;
      //console.log(this.listaDeActores);
    })
  }

  MostrarActores(actor: Actor){
    this.actorElegido = actor;
  }

}
