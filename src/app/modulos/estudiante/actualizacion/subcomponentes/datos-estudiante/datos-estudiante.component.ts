import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datos-estudiante',
  templateUrl: './datos-estudiante.component.html',
  styles: ``
})
export class DatosEstudianteComponent {
  @ViewChild(NgForm, {static: false}) formDatosPersonales!: NgForm;
  primer_nombre: string = '';

  guardarDatosPersonales(){
    this.validar(this.formDatosPersonales);
  }

  validar(formDatosPersonales: NgForm){
    if(formDatosPersonales.valid){
      console.log('Se ha ingresado los datos personales satisfactoriamente')
    }
    else{
      alert('Error en los datos del formulario')
    }
  } 
}
