import { Component } from '@angular/core';
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";

@Component({
  selector: 'app-facturacion-dash',
  standalone: true,
  imports: [AsideBarComponent],
  templateUrl: './facturacion-dash.component.html',
  styleUrl: './facturacion-dash.component.css'
})
export default class FacturacionDashComponent {

}
