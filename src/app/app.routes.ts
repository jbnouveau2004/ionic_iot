import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tableau-de-bord',
    loadComponent: () => import('./tableau-de-bord/tableau-de-bord.page').then( m => m.TableauDeBordPage)
  },
  {
    path: 'tableau-de-bord-en-ligne',
    loadComponent: () => import('./tableau-de-bord-en-ligne/tableau-de-bord-en-ligne.page').then( m => m.TableauDeBordEnLignePage)
  },
];
