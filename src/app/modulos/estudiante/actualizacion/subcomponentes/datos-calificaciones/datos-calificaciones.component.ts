import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {datosTarea} from '../../../../../interfaces/datos-tarea';
import {tareas} from '../../../../../data/calificaciones-array';

@Component({
  selector: 'app-datos-calificaciones',
  templateUrl: './datos-calificaciones.component.html',
  styles: ``
})
export class DatosCalificacionesComponent {

  arrayCalificaciones: datosTarea[] = tareas;

  @ViewChild(NgForm, {static: false}) formDatosCalificaciones!: NgForm;

  primer_Nombre: string = '';

  
  guardarDatosCalificaciones(calificacion: datosTarea){
    tareas.push(calificacion);
  }

  validar(formDatosCalificaciones: NgForm){
    if(formDatosCalificaciones.valid){
      console.log('Se registro la información correcatamente');
    }
    else{
      alert('Error en los datos del formulario')
    }
  }

}
