import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router'; // Usado para la carga diferida

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pregunta1', // Ruta por defecto (puedes cambiar a la ruta que necesites)
    pathMatch: 'full',
  },

  // Si el modal se necesita como una ruta directa
  {
    path: 'resultado-modal', // Ruta para abrir el modal directamente (si es necesario)
    loadChildren: () =>
      import('./resultado-modal/resultado-modal.module').then(
        (m) => m.ResultadoModalPageModule
      ),
  },
  {
    path: 'pregunta1',
    loadChildren: () => import('./preguntas/pregunta1/pregunta1.module').then( m => m.Pregunta1PageModule)
  },
  {
    path: 'pregunta2',
    loadChildren: () => import('./preguntas/pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
  },
  {
    path: 'pregunta3',
    loadChildren: () => import('./preguntas/pregunta3/pregunta3.module').then( m => m.Pregunta3PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
