import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { Actor } from '../class/actor';
import { Pelicula } from '../class/pelicula';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  private urlActor = '/actores';
  coleccion_actores: AngularFirestoreCollection<Pelicula>;
  public actores!: Observable<Actor[]>;

  private urlPelicula = '/pelicula';
  coleccion_pelicula: AngularFirestoreCollection<Pelicula>;
  public peliculas!: Observable<Pelicula[]>;
                                                   //manejo de arch
  constructor(private dataBase: AngularFirestore, private almArch: AngularFireStorage ) { 
    //actores
    this.coleccion_actores = this.dataBase.collection(this.urlActor);
    this.actores = this.coleccion_actores.snapshotChanges().pipe( map ( ret => {
      return ret.map( aux => {
        const dato = aux.payload.doc.data() as unknown as Actor;
        dato.id = aux.payload.doc.id as unknown as number;
        return dato;
      })
    }));    

    //pelicula
    this.coleccion_pelicula = this.dataBase.collection(this.urlPelicula);
    this.peliculas = this.coleccion_pelicula.snapshotChanges().pipe( map ( ret => {
      return ret.map( aux => {
        const dato = aux.payload.doc.data() as unknown as Pelicula;
        dato.id = parseInt(aux.payload.doc.id);
        return dato;
      });
    }))
  }

  //archivos
  //subo arch
  public subirArchivo(archivo: string, datos: any){
    return this.almArch.upload(archivo, datos);
  }
  //lee arch
  public referenciaArchivo(archivo: string){
    return this.almArch.ref(archivo);
  }

  //actores
  getAllActores(){
    return this.actores;
  }
  ActorAlta_service(dato: Actor){
    return this.coleccion_actores.add(JSON.parse(JSON.stringify(dato)));
  }


  //pelicula
  getAllPeliculas(){
    return this.peliculas;
  }
  PeliculaAlta_service(dato: Pelicula){
    return this.coleccion_pelicula.add(JSON.parse(JSON.stringify(dato)));
  }
}
