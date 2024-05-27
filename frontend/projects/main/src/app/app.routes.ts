import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/default/default.component').then(
        (m) => m.DefaultComponent
      ),
  },
];
