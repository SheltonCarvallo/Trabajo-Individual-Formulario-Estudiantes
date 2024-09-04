import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteModule } from './modulos/estudiante/estudiante.module';
//import { EstadoCalificacionesPipePipe } from './pipes/estado-calificaciones-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    //EstadoCalificacionesPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstudianteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
