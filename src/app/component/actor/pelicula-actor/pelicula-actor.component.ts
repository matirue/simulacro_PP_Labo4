import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/class/actor';
import { Pelicula } from 'src/app/class/pelicula';
import { AltaService } from 'src/app/service/alta.service';

@Component({
  selector: 'app-pelicula-actor',
  templateUrl: './pelicula-actor.component.html',
  styleUrls: ['./pelicula-actor.component.css']
})
export class PeliculaActorComponent implements OnInit {

  

  @Input()MostrarPelicula: Actor;

  pelicula!: Pelicula;

  img!: any;
 

  constructor(private auth: AltaService) { 
    this.MostrarPelicula = new Actor();
    this.pelicula = new Pelicula();
    
  }


  ngOnInit(): void {
    
  }




  

  

}
