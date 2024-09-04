import { Component } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { SearchBarComponent } from "../../../Shared/search-bar/search-bar.component";
import { CardFacturaComponent } from "../../../Shared/card-factura/card-factura.component";

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [ H1Component, SearchBarComponent, CardFacturaComponent],
  templateUrl: './facturacion.component.html',
  styleUrl: './facturacion.component.css'
})
export default class FacturacionComponent {
  encontrar:boolean = false
  result:string = ''

  ResultBusqueda(valor:boolean, busqueda:boolean){
    this.encontrar = busqueda
  }
  
}
