import { Component } from '@angular/core';
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";
import { FormGestionUsuariosYPermisosComponent } from "../../Shared/forms/form-gestion-usuarios-y-permisos/form-gestion-usuarios-y-permisos.component";

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [AsideBarComponent, FormGestionUsuariosYPermisosComponent],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export default class GestionUsuariosComponent {

}
