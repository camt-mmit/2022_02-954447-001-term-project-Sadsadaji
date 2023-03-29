import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', redirectTo: 'bobs-burger', pathMatch: 'full' },
  {
    path: 'bobs-burger',
    loadChildren: () =>
      import('./app/bobs-burger/routes').then((mod) => mod.routes),
  },
];
