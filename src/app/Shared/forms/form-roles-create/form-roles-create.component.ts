import { Component } from '@angular/core';
import { H1Component } from "../../h1/h1.component";
import { H2Component } from "../../h2/h2.component";
import { InputTextComponent } from "../input-text/input-text.component";
import { TextareaComponent } from "../textarea/textarea.component";
import { InputDesplegableComponent } from "../input-desplegable/input-desplegable.component";
import { ButtonComponent } from "../../button/button.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";

@Component({
  selector: 'app-form-roles-create',
  standalone: true,
  imports: [H1Component, H2Component, InputTextComponent, TextareaComponent, InputDesplegableComponent, ButtonComponent, CheckboxComponent],
  templateUrl: './form-roles-create.component.html',
  styleUrl: './form-roles-create.component.css'
})
export class FormRolesCreateComponent {

}
