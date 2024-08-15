import { Component } from '@angular/core';
import { AsideBarComponent } from "../../aside-bar/aside-bar.component";
import { H1Component } from "../../h1/h1.component";
import { H2Component } from "../../h2/h2.component";
import AccionesCreateComponent from "../../../Views/acciones-create/acciones-create.component";
import { InputTextComponent } from "../input-text/input-text.component";
import { TextareaComponent } from "../textarea/textarea.component";
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-form-acciones-create',
  standalone: true,
  imports: [AsideBarComponent, H1Component, H2Component, AccionesCreateComponent, InputTextComponent, TextareaComponent, ButtonComponent],
  templateUrl: './form-acciones-create.component.html',
  styleUrl: './form-acciones-create.component.css'
})
export class FormAccionesCreateComponent {

}
