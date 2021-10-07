import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/class/actor';

@Component({
  selector: 'app-info-actor',
  templateUrl: './info-actor.component.html',
  styleUrls: ['./info-actor.component.css']
})
export class InfoActorComponent implements OnInit {

  @Input()MostrarInfoActor: Actor;

  constructor() { 
    this.MostrarInfoActor = new Actor();
  }

  ngOnInit(): void {
  }

}
