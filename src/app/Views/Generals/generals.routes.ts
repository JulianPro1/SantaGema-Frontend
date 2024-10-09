import { Routes } from '@angular/router';
import { AuthGuard } from '../../Core/guards/auth.guard';


export const GENERALS_ROUTES: Routes = [
    {
        path: '', loadComponent: () => import('./generals.component').then(m => m.GeneralsComponent),
        children:[      
            {
                path:'auditoria', 
                title:'Modulo Auditoria',
                loadComponent: () => import('./auditoria/auditoria.component')
            },
            {
                path:'facturacion', 
                title:'Modulo de Facturacion',
                loadComponent: () => import('./facturacion/facturacion.component')
            },
            {
                path:'auditoriaUsuarios', 
                title:'Modulo Auditoria para los Usuarios',
                loadComponent: () => import('./auditoria-usuarios/auditoria-usuarios.component')
            },
            {
                path:'afiliados',
                title:'tabla para afiliados',
                loadComponent: () => import('./gestion-afiliado/gestion-afiliado.component')
            },
            {
                path:'gestionAfiliadoEspecifico', 
                title:'Modulo Gestion de Afiliados',
                loadComponent: () => import('./gestion-afilado-e/gestion-afilado-e.component')
            },
            {
                path:'gestionContratos', 
                title:'Modulo Gestion de Contratos',
                loadComponent: () => import('./gestion-contratos/gestion-contratos.component')
            },
            {
                path:'gestionRoles', 
                title:'Modulo Gestion Roles',
                loadComponent: () => import('./gestion-roles/gestion-roles.component')
            },
            {
                path:'formRolesCreate/:id', 
                title:'Formulario de Creacion de Roles',
                loadComponent: () => import('../View-Forms/roles-create/roles-create.component')
            },
            {
                path:'gestionUsuarios', 
                title:'Modulo Gestion de Usuarios',
                loadComponent: () => import('./gestion-usuarios/gestion-usuarios.component')
            },
            {
                path:'formUsuariosCreate/:id',
                title:'Formulario de Creacion de Usuarios',
                loadComponent: () => import('../View-Forms/gestion-usuarios-create/gestion-usuarios-create.component')
            },
            {
                path:'dashboard',
                //canActivate: [AuthGuard],
                loadComponent: () => import('../facturacion-dash/facturacion-dash.component')
            }
        ]
    },
    {
        path:'home',
        redirectTo:'/home/dashboard',
        pathMatch:'full'
    }

];
