import { Component } from '@angular/core';
import { InputTextComponent } from "../input-text/input-text.component";
import {InputNumberComponent} from "../input-number/input-number.component";
import {ButtonComponent} from "../../button/button.component";
import {H1Component} from "../../h1/h1.component"
import { H2Component } from '../../h2/h2.component';
@Component({
  selector: 'app-form-gestion-grupo-familiar',
  standalone: true,
  imports: [
    InputTextComponent,
    InputNumberComponent,
    ButtonComponent,
    H1Component,
    H2Component
  ],
  templateUrl: './form-gestion-grupo-familiar.component.html',
  styleUrl: './form-gestion-grupo-familiar.component.css'
})
export class FormGestionGrupoFamiliarComponent {

}
