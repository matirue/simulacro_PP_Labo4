import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/class/actor';
import { Pais } from 'src/app/class/pais';
import { AltaService } from 'src/app/service/alta.service';

@Component({
  selector: 'app-actor-alta-formulario',
  templateUrl: './actor-alta-formulario.component.html',
  styleUrls: ['./actor-alta-formulario.component.css']
})
export class ActorAltaFormularioComponent implements OnInit {

  //datos del actor
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  nacionalidad: string = '';

  //prop de seleccionde pais, espera el valor de seleccionDePais del /actorAlta
  @Input()paisElegido!: Pais;

  public forma!: FormGroup;

  constructor(
    private auth: AltaService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    //armo las estructura del grupo
    this.forma = this.fb.group( { 
      'nombre': ['', [Validators.required, this.validadorEspacio]],
      'apellido': ['', [Validators.required, this.validadorEspacio]],
      'email': ['', [Validators.required, Validators.email]],
      'nacionalidad': ['', [Validators.required]],
      //'terminos': ['', Validators.required],
    });
  }

  /*
  GenerarrId(): number{
    return Math.random() * (999 - 0) + 0;
  }*/

  AltaDelActor(){
    //alert(this.forma?.getRawValue());
    //console.log(this.forma.getRawValue());
    //alert('mira la consola, no se donde hay q guardarlo');
    this.forma.controls.nacionalidad.setValue(this.paisElegido.name);

    let unActor: Actor = {
      id: Math.floor(Math.random()*(999-0))+1,
      nombre: this.forma.value.nombre,
      apellido: this.forma.value.apellido,
      email: this.forma.value.email,
      pais: this.paisElegido,
      foto: ''
    }

    //const ret = this.auth.ActorAlta_service(unActor);
    this.auth.ActorAlta_service(unActor).then( ret => {
      if(ret.path){
        this.router.navigateByUrl("/actor/actorPelicula");
      }
      else{
        alert("ERROR en el alta!!!");
      }
    })
    
  }

  private validadorEspacio(control:AbstractControl): null | object{
    const nombre = <string>control.value;
    const tieneEspacios = nombre.includes(' ');

    if(tieneEspacios){
      return { contiene:true };      
    }
    else{
      return null
    }
  }

}
