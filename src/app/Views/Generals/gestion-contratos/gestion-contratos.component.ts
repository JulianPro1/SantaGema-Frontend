import { Component } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { H3Component } from "../../../Shared/h3/h3.component";
import { CardGestionContratosComponent } from "../../../Shared/card-gestion-contratos/card-gestion-contratos.component";
import { DataTableNoStatusComponent } from "../../../Shared/data-table-no-status/data-table-no-status.component";
import { ButtonComponent } from '../../../Shared/button/button.component'

@Component({
  selector: 'app-gestion-contratos',
  standalone: true,
  imports: [
    H1Component,
    H3Component,
    CardGestionContratosComponent,
    DataTableNoStatusComponent,
    ButtonComponent
  ],
  templateUrl: './gestion-contratos.component.html',
  styleUrl: './gestion-contratos.component.css'
})
export default class GestionContratosComponent {
  
}
