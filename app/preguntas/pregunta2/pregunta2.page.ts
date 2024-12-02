import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CalculoService } from '../../services/calculo.service';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.page.html',
  styleUrls: ['./pregunta2.page.scss'],
})
export class Pregunta2Page {

  valorPregunta2: number = 0
  constructor(private router: Router, public calculoService: CalculoService) {}

  // Método para navegar a la siguiente página
  siguientePregunta() {
    const seleccionados = this.calculoService.materialesInternos.filter(
      (item) => item.seleccionado
    );

    if (seleccionados.length === 0) {
      alert('Por favor, seleccione al menos una opción.');
      return;
    }

    // Ir a la siguiente página
    this.router.navigate(['/pregunta3']);
  }

}
