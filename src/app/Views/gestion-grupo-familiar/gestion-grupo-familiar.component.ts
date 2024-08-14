import { Component } from '@angular/core';
import { FormGestionGrupoFamiliarComponent } from "../../Shared/forms/form-gestion-grupo-familiar/form-gestion-grupo-familiar.component";
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";

@Component({
  selector: 'app-gestion-grupo-familiar',
  standalone: true,
  imports: [FormGestionGrupoFamiliarComponent, AsideBarComponent],
  templateUrl: './gestion-grupo-familiar.component.html',
  styleUrl: './gestion-grupo-familiar.component.css'
})
export default class GestionGrupoFamiliarComponent {

}
