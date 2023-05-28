export class Episodio {
    nombre: string;
    resumen: string;
    duracion: TimeRanges;
  
    constructor(nombre: string, resumen: string, duracion: TimeRanges) {
      this.nombre = nombre;
      this.resumen = resumen;
      this.duracion = duracion;
    }
  }