import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {datosTarea} from '../../../../../interfaces/datos-tarea';
import {tareas} from '../../../../../data/calificaciones-array';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-modal-estudiante',
  templateUrl: './modal-estudiante.component.html',
})
export default class ModalEstudianteComponent {

  @Input()
  modalid: string = 'modalejemplo';

  @Input()
  datosCalificacion: datosTarea = {
    nombreTarea: '',
    descripcionTarea: '',
    fechaInicio: '',
    fechaFin: '',
    calificacion: 0
  } 

  @Output() eventoGuardar = new EventEmitter<datosTarea>();

  @ViewChild(Modal, {static: true}) divModal!: Modal;

  guardar(){
    if(!this.validarGuardar()){
      this.eventoGuardar.emit(this.datosCalificacion);
      this.cerrarModal()
    }
  }

  cerrarModal(){
    let btnCerrar =  document.getElementById('btnCerrarModal');
    if(btnCerrar){
      btnCerrar?.click();
    }
  }

  validarGuardar(): boolean{

    if(this.validarEstaVacio(this.datosCalificacion.nombreTarea)){
      this.mostrarMensajeError('Ingrese nombre de la tarea');
      return true;
    }

    if(this.validarEstaVacio(this.datosCalificacion.descripcionTarea)){
      this.mostrarMensajeError('Ingrese la descripción de la tarea');
      return true
    }
    if(this.validarEstaVacio(this.datosCalificacion.fechaInicio)){
      this.mostrarMensajeError('Ingrese fecha de inicio la tarea');
      return true
    }
    if(this.validarEstaVacio(this.datosCalificacion.fechaFin)){
      this.mostrarMensajeError('Ingrese fecha fin de la tarea');
      return true
    }
    if(this.validarEstaVacio(this.datosCalificacion.calificacion)){
      this.mostrarMensajeError('Ingrese la calificación de la tarea');
      return true
    }

    return false;
  }

  validarEstaVacio(value: any) {
    return value.lenght == 0 || value === '' || value === undefined || value == null;
  }

  mostrarMensajeError(message: string) {
    this.mostrarMensajeBase(message, 'danger');
  }

  mostrarMensajeExito(message: string) {
    this.mostrarMensajeBase(message, 'success');
  }

  mostrarMensajeAlerta(message: string) {
    this.mostrarMensajeBase(message, 'warn');
  }

  mostrarMensajeBase(message: string, type: string){

    const alertPlaceHolder = document.getElementById('divMensaje')
    const appendAlert = () => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
      alertPlaceHolder?.appendChild(wrapper)
    }
    appendAlert()
  }

}
