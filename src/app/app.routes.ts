import { Routes } from '@angular/router';
import { AsideBarComponent } from './Shared/aside-bar/aside-bar.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Autentication/login/login.component')
    },
    {
        path: 'home',
        loadChildren: () => import('./Views/Generals/generals.routes').then( m => m.GENERALS_ROUTES)
    },
];
