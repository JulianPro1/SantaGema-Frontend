import { Component, input } from '@angular/core';
import { DataTableComponent } from "../../Shared/data-table/data-table.component";
import { ButtonComponent } from '../../Shared/button/button.component';
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";

@Component({
  selector: 'app-gestion-afiliado',
  standalone: true,
  imports: [DataTableComponent, ButtonComponent, AsideBarComponent],
  templateUrl: './gestion-afiliado.component.html',
  styleUrl: './gestion-afiliado.component.css'
})
export default class GestionAfiliadoComponent {
  encabezados:string[] = ['Nombre','Correo','Cedula','Fecha Pago','Estado'];
}
