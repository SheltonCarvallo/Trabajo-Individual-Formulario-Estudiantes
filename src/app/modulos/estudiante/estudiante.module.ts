import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizacionComponent } from './actualizacion/actualizacion.component';
import { DatosEstudianteComponent } from './actualizacion/subcomponentes/datos-estudiante/datos-estudiante.component';
import { DatosRepresentanteComponent } from './actualizacion/subcomponentes/datos-representante/datos-representante.component';
import { DatosCalificacionesComponent } from './actualizacion/subcomponentes/datos-calificaciones/datos-calificaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadoCalificacionesPipePipe } from '../../pipes/estado-calificaciones-pipe.pipe';
import ModalEstudianteComponent from './actualizacion/subcomponentes/modal-estudiante/modal-estudiante.component';




@NgModule({
  declarations: [
    ActualizacionComponent,
    DatosEstudianteComponent,
    DatosRepresentanteComponent,
    DatosCalificacionesComponent,
    EstadoCalificacionesPipePipe,
    ModalEstudianteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ActualizacionComponent
  ]
})
export class EstudianteModule { }
