import { Component } from '@angular/core';
import {FormPagoComponent} from '../../Shared/forms/form-pago/form-pago.component';

@Component({
  selector: 'app-facuracion-pago',
  standalone: true,
  imports: [
    FormPagoComponent
  ],
  templateUrl: './facuracion-pago.component.html',
  styleUrl: './facuracion-pago.component.css'
})
export default class FacuracionPagoComponent {

}
