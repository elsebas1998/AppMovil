import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultadoModalPage } from '../resultado-modal/resultado-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

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
    { id: 3, nombre: 'DISPOSITIVOS ELECTRÓNICOS', valor: 1, seleccionado: false },
    { id: 4, nombre: 'MUEBLES DE OFICINA', valor: 1, seleccionado: false },
    { id: 5, nombre: 'REACTIVOS', valor: 4, seleccionado: false },
    { id: 6, nombre: 'COMBUSTIBLES', valor: 3, seleccionado: false },
    { id: 7, nombre: 'LIBRERÍAS', valor: 1, seleccionado: false },
    { id: 8, nombre: 'MUEBLES DE GYMNASIO', valor: 1, seleccionado: false },
  ];

  
  resultadoFinal: number | null = null;
  mensaje: string = '';

  async calcularPromedio() {
    // 1. Calcular el promedio de Materiales Externos
    const promedioExternos = this.calcularPromedioSeccion(this.materialesExternos);
    console.log("promedioExternos", promedioExternos);
    const porcentajeExternos = promedioExternos * 0.15;
    console.log("porcentajeExternos", porcentajeExternos);
    // 2. Calcular el promedio de Materiales Internos
    const promedioInternos = this.calcularPromedioSeccion(this.materialesInternos);
    const porcentajeInternos = promedioInternos * 0.50;
    console.log("promedioInternos", promedioInternos);
    console.log("porcentajeInternos", porcentajeInternos);
    // 3. Calcular el promedio de Inmuebles
    const promedioInmuebles = this.calcularPromedioSeccion(this.inmuebles);
    const porcentajeInmuebles = promedioInmuebles * 0.35;
    console.log("promedioInmuebles", promedioInmuebles);
    console.log("porcentajeInmuebles", porcentajeInmuebles);
    // 4. Sumar todos los valores ponderados
    const total = porcentajeExternos + porcentajeInternos + porcentajeInmuebles;
    console.log("total suma", total);
    // 5. Redondear el valor final
    this.resultadoFinal = Math.round(total);
    console.log("resultadoFinal redondeado", this.resultadoFinal);
    // 6. Determinar el mensaje según el valor redondeado
    this.mensaje = this.determinarNivel(this.resultadoFinal);
    // 7. Mostrar el resultado en un modal
    const modal = await this.modalController.create({
      component: ResultadoModalPage,
      componentProps: {
        resultadoFinal: this.resultadoFinal,
        mensaje: this.mensaje,
      },
    });

    await modal.present();
  }

  calcularPromedioSeccion(seccion: any[]): number {
    const seleccionados = seccion.filter(item => item.seleccionado);
    if (seleccionados.length === 0) return 0; // Si no se selecciona nada, promedio = 0
    const suma = seleccionados.reduce((acc, item) => acc + item.valor, 0);
    return suma / seleccionados.length; // Promedio de la sección
  }

  determinarNivel(valor: number): string {
    if (valor >= 0 && valor < 1) {
      return 'Nivel 0: Sin peligro, edificación no inflamable.';
    } else if (valor >= 1 && valor < 2) {
      return 'Nivel 1: Peligro leve, su edificación requiere calor significativo para encenderse.';
    } else if (valor >= 2 && valor < 3) {
      return 'Nivel 2: Peligro moderado, su edificación se enciende fácilmente a temperaturas normales.';
    } else if (valor >= 3 && valor < 4) {
      return 'Nivel 3: Peligro grave, su edificación es muy inflamable, se enciende a temperaturas normales.';
    } else if (valor >= 4) {
      return 'Nivel 4: Peligro extremo, su edificación se enciende con facilidad, incluso con una pequeña chispa.';
    }
    return 'Nivel no determinado.';
  }

 
  encerarDatos() {
   // Reiniciar todos los checklists
   this.materialesExternos.forEach(item => (item.seleccionado = false));
   this.materialesInternos.forEach(item => (item.seleccionado = false));
   this.inmuebles.forEach(item => (item.seleccionado = false));

   // Reiniciar el promedio y el mensaje
   this.resultadoFinal = null;
   this.mensaje = '';
  }
}
