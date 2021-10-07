import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/class/actor';
import { Pelicula } from 'src/app/class/pelicula';
import { AltaService } from 'src/app/service/alta.service';

@Component({
  selector: 'app-alta-pelicula-formulario',
  templateUrl: './alta-pelicula-formulario.component.html',
  styleUrls: ['./alta-pelicula-formulario.component.css']
})
export class AltaPeliculaFormularioComponent implements OnInit {

  @Input()actorSeleccionado!: Actor;

  public form = new FormData();

  pelicula!: Pelicula;
  titulo_peli!:string;
  genero_peli!:string;
  fechaEstreno_peli!:string;
  fotoPelicula_peli!: string;
  cantidadDePublico!:number;

  nombre_arch!:string;
  mensaje_arch = '';
  miArchivo:boolean = false;
  porcentaje!: number;

  actor_nombre!: string;

  
  ok: boolean = false;
  url = '';
  seleccion: string = '';


  constructor(
    private router: Router, 
    private auth: AltaService) { }

  ngOnInit(): void {
  }

  obtenerId():number{
    return Math.floor(Math.random() * (999 - 0) + 0);
  }

  GeneroSeleccionado(){
    this.genero_peli = this.genero_peli;
  }

  //subo el ach con la info de la peli
  nuevoArchivo(evento: any){
    if(evento.target.file.length > 0){
      this.miArchivo = true;

      for(let i = 0; i < evento.target.file.length; i++){
        this.mensaje_arch = " >>Arch. Listo";
        this.nombre_arch = evento.target.files[i].name;
        this.form.delete('archivo')
        this.form.append('archivo', evento.target.files[i], evento.target.files[i].name)
      }
    }
    else{
      this.miArchivo = false;
      this.mensaje_arch = 'ERROR! No existe ningun archivo';
    }
  }

  //guardo el archiivo
  subirNuevoArchivo(){
    let auxArchivo = this.form.get('archivo');
    let referenciaArchivo = this.auth.referenciaArchivo(this.nombre_arch);
    let aux = this.auth.subirArchivo(this.nombre_arch, auxArchivo);

    aux.percentageChanges().subscribe( (porcentaje) => {
      this.porcentaje = Math.round(<number>porcentaje);

      if(this.porcentaje == 100) {
        this.ok = true;
      }
    });

    referenciaArchivo.getDownloadURL().subscribe( (path) => {
      this.url = path;
    });
  }

  CargarPelicula(){
    //info de peli y actor
    this.pelicula = {
      id: this.obtenerId(),
      nombre: this.titulo_peli,
      tipo: this.genero_peli,
      fechaDeEstreno: this.fechaEstreno_peli,
      fotoDePelicula: this.fotoPelicula_peli,
      cantidadDePublico: Math.floor(Math.random() * (999 - 1) + 1),

      actor: {
        nombre: this.actorSeleccionado.nombre,
        apellido: this.actorSeleccionado.apellido,
        email: this.actorSeleccionado.email,
        id: this.actorSeleccionado.id,
        pais: this.actorSeleccionado.pais,
        foto: this.fotoPelicula_peli,
      },
    };

    const aux = this.auth.PeliculaAlta_service(this.pelicula);

    aux.then( dato => {
      if(dato.path){
        //this.router.navigateByUrl("/bienvenidos");
        this.router.navigateByUrl("/pelicula/busquedaPelicula");
        console.log("ALTA EXITOSA!!!");
      }
      else{
        alert("ERROR EN EL ALTA DE LA PELICULA!!!!");
      }
      
    })

  }

}
