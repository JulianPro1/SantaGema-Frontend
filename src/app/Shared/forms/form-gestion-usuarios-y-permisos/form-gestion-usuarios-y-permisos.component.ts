import { Component } from '@angular/core';
import { H1Component } from "../../h1/h1.component";
import { H2Component } from "../../h2/h2.component";
import { InputTextComponent } from "../input-text/input-text.component";
import { InputNumberComponent } from "../input-number/input-number.component";
import { InputPasswordComponent } from "../input-password/input-password.component";
import { ButtonComponent } from '../../button/button.component';
import { InputDesplegableComponent } from "../input-desplegable/input-desplegable.component";

@Component({
  selector: 'app-form-gestion-usuarios-y-permisos',
  standalone: true,
  imports: [
    H1Component,
    H2Component,
    InputTextComponent,
    InputNumberComponent,
    InputPasswordComponent,
    ButtonComponent,
    InputDesplegableComponent
],
  templateUrl: './form-gestion-usuarios-y-permisos.component.html',
  styleUrl: './form-gestion-usuarios-y-permisos.component.css'
})
export class FormGestionUsuariosYPermisosComponent {

}
