import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCalificacionesPipe'
})
export class EstadoCalificacionesPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    
    let estado: string;

    if ( value >= 7)
    {
      estado = 'Aprobado';
    }
    else
    {
      estado = 'Reprobado'
    }
    return estado;
  }
}
