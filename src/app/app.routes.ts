import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./components/gestion-afilado-e/gestion-afilado-e.component')
    },
    {
        path: 'afiliados',
        loadComponent: () => import('./components/gestion-afiliado/gestion-afiliado.component')
    }
];
