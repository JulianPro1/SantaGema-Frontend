import { Component } from '@angular/core';
import { AsideBarComponent } from "../../../Shared/aside-bar/aside-bar.component";
import { CardUsuarioComponent } from "../../../Shared/card-usuario/card-usuario.component";
import { H1Component } from "../../../Shared/h1/h1.component";
import { H2Component } from '../../../Shared/h2/h2.component';

@Component({
  selector: 'app-auditoria-usuarios',
  standalone: true,
  imports: [
    AsideBarComponent, 
    CardUsuarioComponent, 
    H1Component,
    H2Component
  ],
  templateUrl: './auditoria-usuarios.component.html',
  styleUrl: './auditoria-usuarios.component.css'
})
export default class AuditoriaUsuariosComponent {

}
