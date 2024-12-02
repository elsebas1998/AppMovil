import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultadoModalPage } from 'src/app/resultado-modal/resultado-modal.page';
@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.page.html',
  styleUrls: ['./pregunta3.page.scss'],
})
export class Pregunta3Page {
  valorPregunta3: number = 0; 
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

  constructor(private modalController: ModalController) {}

  async calcularPromedio() {
    const seleccionados = this.inmuebles.filter((item) => item.seleccionado);
    if (seleccionados.length === 0) {
      return; // Manejar el caso donde no hay selecciones
    }

    const promedio =
      seleccionados.reduce((acc, item) => acc + item.valor, 0) /
      seleccionados.length;

    // Mostrar modal con resultado
    const modal = await this.modalController.create({
      component: ResultadoModalPage,
      componentProps: {
        resultadoFinal: Math.round(promedio * 0.35), // Ponderación del 35%
        mensaje: 'Esto es solo un ejemplo de resultado.', // Puedes reemplazar con lógica real
      },
    });

    await modal.present();
  }
}
