import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { ActorAltaComponent } from './component/actor/actor-alta/actor-alta.component';
import { PeliculaAltaComponent } from './component/peliculas/pelicula-alta/pelicula-alta.component';
import { ActorPeliculaComponent } from './component/actor/actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  {
    path: '', 
    component: BienvenidoComponent
  },
  {
    path: 'bienvenidos', 
    component: BienvenidoComponent
  },
  {
    path: 'pelicula', 
    children: [
      {path: 'busquedaPelicula',  component: BusquedaComponent},
      {path: 'alta',  component: PeliculaAltaComponent}
    ]
    
  },
  {
    path: 'actor', 
    children: [
      {path: 'altaActores', component: ActorAltaComponent},
      {path: 'actorPelicula',  component: ActorPeliculaComponent}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
