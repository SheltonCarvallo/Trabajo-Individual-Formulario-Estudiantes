import { Component, ViewChild } from '@angular/core';
import { DatosEstudianteComponent } from './subcomponentes/datos-estudiante/datos-estudiante.component';
import { DatosRepresentanteComponent } from './subcomponentes/datos-representante/datos-representante.component';
import { DatosCalificacionesComponent } from './subcomponentes/datos-calificaciones/datos-calificaciones.component';

@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.component.html',
  styles: ``
})
export class ActualizacionComponent {

    @ViewChild(DatosEstudianteComponent) datosEstudianteComponent!: DatosEstudianteComponent;
    @ViewChild(DatosRepresentanteComponent) datosRepresentanteComponent!: DatosRepresentanteComponent;
    @ViewChild(DatosCalificacionesComponent) DatosCalificacionesComponent!: DatosRepresentanteComponent;
}
