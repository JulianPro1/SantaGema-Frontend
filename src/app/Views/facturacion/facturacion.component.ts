import { Component } from '@angular/core';
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";
import { H1Component } from "../../Shared/h1/h1.component";
import { AsideBarUserComponent } from "../../Shared/aside-bar-user/aside-bar-user.component";
import { SearchBarComponent } from "../../Shared/search-bar/search-bar.component";
import { CardFacturaComponent } from "../../Shared/card-factura/card-factura.component";

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [AsideBarComponent, H1Component, AsideBarUserComponent, SearchBarComponent, CardFacturaComponent],
  templateUrl: './facturacion.component.html',
  styleUrl: './facturacion.component.css'
})
export default class FacturacionComponent {

}
