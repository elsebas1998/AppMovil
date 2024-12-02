import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CalculoService } from 'src/app/services/calculo.service';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.page.html',
  styleUrls: ['./pregunta1.page.scss'],
})
export class Pregunta1Page{
  valorPregunta1: number = 0

  constructor(private router: Router, public calculoService: CalculoService) {}

  // Método para navegar a la siguiente página
  siguientePregunta() {
    const seleccionados = this.calculoService.materialesExternos.filter(
      (item) => item.seleccionado
    );

    if (seleccionados.length === 0) {
      alert('Por favor, seleccione al menos una opción.');
      return;
    }

    // Ir a la siguiente página
    this.router.navigate(['/pregunta2']);
  }

}
