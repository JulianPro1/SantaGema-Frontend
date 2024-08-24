import { Routes } from '@angular/router';
import { AsideBarComponent } from './Shared/aside-bar/aside-bar.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Autentication/login/login.component')
    },
    {
        path: 'afiliados',
        loadComponent: () => import('./Views/gestion-afiliado/gestion-afiliado.component')
    },
    {
        path: 'facturacion',
        loadComponent: () => import ('./Views/facturacion/facturacion.component')
    }
    ,
    {
        path: 'auditoria',
        loadComponent: () => import ('./Views/auditoria/auditoria.component')
    }
    ,
    {
        path: 'gestionContratos',
        loadComponent: () => import ('./Views/gestion-contratos/gestion-contratos.component')
    }
    ,
    {
        path: 'facturacionDash',
        loadComponent: () => import ('./Views/facturacion-dash/facturacion-dash.component')
    }
    ,
    {
        path: 'gestionGrupoFamiliarCreate',
        loadComponent: () => import ('./Views/gestion-grupo-familiar/gestion-grupo-familiar.component')
    }
    ,
    {
        path: 'gestionAfiliadoEspecifico',
        loadComponent: () => import('./Views/gestion-afilado-e/gestion-afilado-e.component')
    },
    {
        path: 'facturacionPago',
        loadComponent: () => import('./Views/facuracion-pago/facuracion-pago.component')
    },
    {
        path: 'usuarios',
        loadComponent: () => import('./Views/gestion-usuarios/gestion-usuarios.component')
    },
    {
        path: 'gestionUsuariosCreate',
        loadComponent: () => import('./Views/gestion-usuarios-create/gestion-usuarios-create.component')
    },
    {
        path: 'accionesCreate',
        loadComponent: () => import('./Views/acciones-create/acciones-create.component')
    },
    {
        path: 'formRolesCreate/:id',
        loadComponent: () => import('./Views/roles-create/roles-create.component')
    },
    {
        path: 'auditoriaUsuarios',
        loadComponent: () => import('./Views/auditoria-usuarios/auditoria-usuarios.component')
    }
    ,
    {
        path: 'gestionUsuarios',
        loadComponent: () => import('./Views/gestion-usuarios/gestion-usuarios.component')
    }
    ,
    {
        path: 'gestionRoles',
        loadComponent: () => import('./Views/gestion-roles/gestion-roles.component')
    },
    {
        path: 'AuditoriaUsuariosComponent',
        loadComponent: () => import('./Views/auditoria-usuarios/auditoria-usuarios.component')
    }


];
