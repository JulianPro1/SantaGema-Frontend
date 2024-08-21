import { Component } from '@angular/core';
import { H1Component } from "../../Shared/h1/h1.component";
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";
import { H3Component } from "../../Shared/h3/h3.component";
import { CardGestionContratosComponent } from "../../Shared/card-gestion-contratos/card-gestion-contratos.component";
import { DataTableNoStatusComponent } from "../../Shared/data-table-no-status/data-table-no-status.component";

@Component({
  selector: 'app-gestion-contratos',
  standalone: true,
  imports: [
    H1Component, 
    AsideBarComponent, 
    H3Component,  
    CardGestionContratosComponent,
    DataTableNoStatusComponent
  ],
  templateUrl: './gestion-contratos.component.html',
  styleUrl: './gestion-contratos.component.css'
})
export default class GestionContratosComponent {
  encabezados:string[] = ['nombre','edad','fecha Registro']
}
