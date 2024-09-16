import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        redirectTo:'',
        pathMatch:'full'
    },
    {
        path: '',
        loadComponent: () => import('./Autentication/login/login.component')
    },
    {
        path: 'home',
        loadChildren: () => import('./Views/Generals/generals.routes').then( m => m.GENERALS_ROUTES)
    },
    {
        path:'**',
        title:'Pagina erronea',
        loadComponent: () => import('./Autentication/login/login.component')
    }
  
];
