import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/class/actor';
import { Pelicula } from 'src/app/class/pelicula';

@Component({
  selector: 'app-info-pais',
  templateUrl: './info-pais.component.html',
  styleUrls: ['./info-pais.component.css']
})
export class InfoPaisComponent implements OnInit {

  @Input()MostrarInfoPais: Actor;

  constructor() {
    this.MostrarInfoPais = new Actor();
   }

  ngOnInit(): void {
  }

}
