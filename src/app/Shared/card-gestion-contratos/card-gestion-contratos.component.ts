import { Component} from '@angular/core';
import { NgClass } from "@angular/common";
import { H1Component } from "../h1/h1.component";
import { DataTableNoStatusComponent } from "../data-table-no-status/data-table-no-status.component";

@Component({
  selector: 'app-card-gestion-contratos',
  standalone: true,
  imports: [H1Component, DataTableNoStatusComponent,NgClass],
  templateUrl: './card-gestion-contratos.component.html',
  styleUrl: './card-gestion-contratos.component.css'
})
export class CardGestionContratosComponent {
  encabezados: string[] = ['nombre', 'edad', 'fecha Registro'];

  condicion:number = 1;
  
  seleccion(id:number){

    this.condicion = id;
  }
}
