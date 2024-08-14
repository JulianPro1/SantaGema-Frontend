import { Component, input } from '@angular/core';
import { DataTableComponent } from "../../Shared/data-table/data-table.component";
import { ButtonComponent } from '../../Shared/button/button.component';
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";
import { AsideBarUserComponent } from "../../Shared/aside-bar-user/aside-bar-user.component";
import { H1Component } from "../../Shared/h1/h1.component";
import { H2Component } from "../../Shared/h2/h2.component";
import { H3Component } from "../../Shared/h3/h3.component";

@Component({
  selector: 'app-gestion-afiliado',
  standalone: true,
  imports: [DataTableComponent, ButtonComponent, AsideBarComponent,
    AsideBarUserComponent, H1Component, H2Component, H3Component],
  templateUrl: './gestion-afiliado.component.html',
  styleUrl: './gestion-afiliado.component.css'
})
export default class GestionAfiliadoComponent {
  encabezados:string[] = ['Nombre','Correo','Cedula','Fecha Pago','Estado de Pago'];
  ruta:string = '/gestionAfiliadoEspecifico'
}
