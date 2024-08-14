import { Component } from '@angular/core';
import {InputDesplegableComponent} from '../input-desplegable/input-desplegable.component';
import {InputNumberComponent} from '../input-number/input-number.component';

@Component({
  selector: 'app-form-pago',
  standalone: true,
  imports: [
    InputDesplegableComponent,
    InputNumberComponent
  ],
  templateUrl: './form-pago.component.html',
  styleUrl: './form-pago.component.css'
})
export class FormPagoComponent {

}
