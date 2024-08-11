import { Routes } from '@angular/router';
import { AsideBarComponent } from './Shared/aside-bar/aside-bar.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Autentication/login/login.component')
    },
    {
        path: 'afiliados',
        loadComponent: () => import('./components/gestion-afiliado/gestion-afiliado.component')
    },
    {
        path: 'facturacion',
        loadComponent: () => import ('./components/facturacion/facturacion.component')
    }
    // {
    //     path: 'aside',
    //     loadComponent: () => import('./Shared/aside-bar/aside-bar.component').then((mod) => mod.AsideBarComponent)
    // },
    // {
    //     path: 'data',
    //     loadComponent: () => import('./Shared/data-table/data-table.component').then((mod) => mod.DataTableComponent)
    // }

];
