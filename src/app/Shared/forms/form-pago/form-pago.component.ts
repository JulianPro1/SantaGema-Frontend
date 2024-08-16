import { Component } from '@angular/core';
import {InputDesplegableComponent} from '../input-desplegable/input-desplegable.component';
import {InputNumberComponent} from '../input-number/input-number.component';
import {H1Component} from '../../h1/h1.component';
import { H2Component } from '../../h2/h2.component';
import { ButtonComponent } from "../../button/button.component";
import { CalendarRangeComponent } from "../calendar-range/calendar-range.component";

@Component({
  selector: 'app-form-pago',
  standalone: true,
  imports: [
    InputDesplegableComponent,
    InputNumberComponent,
    H1Component,
    ButtonComponent,
    H2Component,
    CalendarRangeComponent
],
  templateUrl: './form-pago.component.html',
  styleUrl: './form-pago.component.css'
})
export class FormPagoComponent {

}
