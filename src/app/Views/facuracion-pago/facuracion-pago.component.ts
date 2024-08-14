import { Component } from '@angular/core';
import {FormPagoComponent} from '../../Shared/forms/form-pago/form-pago.component';
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";

@Component({
  selector: 'app-facuracion-pago',
  standalone: true,
  imports: [
    FormPagoComponent,
    AsideBarComponent
],
  templateUrl: './facuracion-pago.component.html',
  styleUrl: './facuracion-pago.component.css'
})
export default class FacuracionPagoComponent {

}
