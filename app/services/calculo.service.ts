import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  materialesExternos = [
    { id: 1, nombre: 'HORMIGÓN', valor: 1, seleccionado: false },
    { id: 2, nombre: 'ACERO', valor: 1, seleccionado: false },
    { id: 3, nombre: 'HORMIGÓN ARMADO', valor: 1, seleccionado: false },
    { id: 4, nombre: 'MADERA', valor: 2, seleccionado: false },
    { id: 5, nombre: 'PLÁSTICOS', valor: 3, seleccionado: false },
  ];

  materialesInternos = [
    { id: 1, nombre: 'BLOQUE', valor: 1, seleccionado: false },
    { id: 2, nombre: 'LADRILLO', valor: 1, seleccionado: false },
    { id: 3, nombre: 'MADERA', valor: 2, seleccionado: false },
    { id: 4, nombre: 'GYPSUM', valor: 3, seleccionado: false },
  ];

  inmuebles = [
    { id: 1, nombre: 'MUEBLERÍA', valor: 1, seleccionado: false },
    { id: 2, nombre: 'ELECTRODOMÉSTICOS', valor: 1, seleccionado: false },
    // Otros elementos
  ];

  resultadoFinal: number | null = null;

  calcularPromedio(): number {
    const promedioExternos = this.calcularPromedioSeccion(this.materialesExternos) * 0.15;
    const promedioInternos = this.calcularPromedioSeccion(this.materialesInternos) * 0.50;
    const promedioInmuebles = this.calcularPromedioSeccion(this.inmuebles) * 0.35;

    const total = promedioExternos + promedioInternos + promedioInmuebles;
    this.resultadoFinal = Math.round(total);
    return this.resultadoFinal;
  }

  calcularPromedioSeccion(seccion: any[]): number {
    const seleccionados = seccion.filter(item => item.seleccionado);
    if (seleccionados.length === 0) return 0;
    const suma = seleccionados.reduce((acc, item) => acc + item.valor, 0);
    return suma / seleccionados.length;
  }
}
