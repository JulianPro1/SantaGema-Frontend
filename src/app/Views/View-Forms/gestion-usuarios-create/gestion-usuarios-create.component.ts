import { Component } from '@angular/core';
import { AsideBarComponent } from "../../../Shared/aside-bar/aside-bar.component";
import { FormGestionUsuariosYPermisosComponent } from "../../../Shared/forms/form-gestion-usuarios-y-permisos/form-gestion-usuarios-y-permisos.component";

@Component({
  selector: 'app-gestion-usuarios-create',
  standalone: true,
  imports: [
    AsideBarComponent,
    FormGestionUsuariosYPermisosComponent
  ],
  templateUrl: './gestion-usuarios-create.component.html',
  styleUrl: './gestion-usuarios-create.component.css'
})
export default class GestionUsuariosCreateComponent {

}
