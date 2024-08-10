import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./Autentication/login/login.component')
    },
    {
        path: 'afiliados',
        loadComponent: () => import('./components/gestion-afiliado/gestion-afiliado.component')
    }
];
