import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/class/pais';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  //prop para manejo de la lista de paises
  listaDePaises!: any[];
  seleccionDePais!: Pais;

  constructor(private paises_service: PaisesService) { 
    this.listaDePaises = [];
  }

  ngOnInit(): void {
    this.paises_service.getTodosLosPaises().subscribe( (paises) => {
      this.listaDePaises = JSON.parse(JSON.stringify(paises));
    })
  }

  //lee la lista de paises
  MostarPaises(pais: Pais){
    this.seleccionDePais = pais;
    //console.log("flag >>", this.seleccionDePais.flag);
  }

}
