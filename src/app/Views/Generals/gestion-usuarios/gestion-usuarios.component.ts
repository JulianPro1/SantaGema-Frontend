import { Component, inject } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { SearchBarComponent } from "../../../Shared/search-bar/search-bar.component";
import { DataTableComponent } from "../../../Shared/data-table/data-table.component";
import { H3Component } from "../../../Shared/h3/h3.component";
import {ButtonComponent} from '../../../Shared/button/button.component'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [
    H1Component, 
    SearchBarComponent, 
    DataTableComponent, 
    H3Component,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export default class GestionUsuariosComponent {
  arrayEncabezados:string[] = ['Nombre', 'Cedula', 'Rol', 'Fecha de Accion'];  
  content:string = 'end'; 


}
