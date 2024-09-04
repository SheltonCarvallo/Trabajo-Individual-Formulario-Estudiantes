import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datos-representante',
  templateUrl: './datos-representante.component.html',
  styles: ``
})
export class DatosRepresentanteComponent {
  @ViewChild(NgForm, {static: false}) formDatosRepresentante!: NgForm;
  primer_nombre: string = '';

  guardarDatosRepresentante(){
    this.validar(this.formDatosRepresentante);
  }

  validar(formDatosRespresentante: NgForm){
    if(this.formDatosRepresentante.valid){
      console.log('Se ha ingresado los datos personales satisfactoriamente')
    }
    else{
      alert('Error en los datos del formulario')
    }
  } 
}
