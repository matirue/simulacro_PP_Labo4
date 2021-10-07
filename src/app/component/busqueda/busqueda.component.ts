import { Component, OnInit } from '@angular/core';
import { AltaService } from 'src/app/service/alta.service';
import { Pelicula } from './../../class/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  /** PROPIEDADES */
  listaDePeliculas!: Pelicula[];
  seleccionDePeli!: Pelicula;
  /*****************/

  constructor(
    private auth: AltaService
  ) { //meter peliculas para mostrar

    /*this.listaDePeliculas = [
      {
        id: 1,
        nombre: "Harry Potter y el Caliz de Fuego",
        tipo: "Fantacia",
        fechaDeEstreno: "18/11/2005",
        cantidadDePublico: 100,
        fotoDePelicula: "https://es.web.img2.acsta.net/pictures/14/04/30/11/29/268191.jpg",
        
        actor: {
          nombre: "Daniel",
          apellido: "Radcliffe",
          email: "daniel@Radcliffe.com",
          id: 11,
          pais: "Inglaterra"
        },
      },
      {
        id: 2,
        nombre: "El Señor de los Anillos: las dos torres",
        tipo: "Aventura, Fantacia epica",
        fechaDeEstreno: "18/12/2002",
        cantidadDePublico: 150,
        fotoDePelicula: "https://es.web.img3.acsta.net/medias/nmedia/18/89/85/69/20070008.jpg",

        actor: {
          nombre: "Elijah",
          apellido: "Wood",
          email: "Elijah@Wood.com",
          id: 12,
          pais: "Estados Unidos"
        }
      },
      {
        id: 3,
        nombre: "Star Wars: Episodio I - La amenaza fantasma",
        tipo: "Space opera",
        fechaDeEstreno: "26/05/1997",
        cantidadDePublico: 300,
        fotoDePelicula: "https://i1.wp.com/www.lafosadelrancor.com/wp-content/uploads/2019/06/episodio-I-portada.jpg?fit=670%2C381&ssl=1",

        actor: {
          nombre: "Liam",
          apellido: "Neeson",
          email: "Liam@Neeson.com",
          id: 13,
          pais: "Irlanda del Norte"
        }
      },
      {
        id: 4,
        nombre: "The Matrix Revolutions",
        tipo: "Acción, Suspenso, Negro, Ciencia ficción, Mecha, Cyberpunk",
        fechaDeEstreno: "05/11/2003",
        cantidadDePublico: 500,
        fotoDePelicula: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiX2_pkYAAcHrc0Rn2JTQx1h0agqpCRRLSYKoWrO9CcnQdzDAi",

        actor: {
          nombre: "Keanu",
          apellido: "Reeves",
          email: "Reeves",
          id: 14,
          pais: "Canada"
        }
      }
    ];*/
  }

  ngOnInit(): void {

    this.auth.getAllPeliculas().subscribe( (peli: Pelicula[]) => {
      this.listaDePeliculas = peli;
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

  AlertBoton(){
    alert("NO tiene funcionalidad todavia");
  }

}
