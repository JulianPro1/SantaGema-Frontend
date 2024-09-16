import { Component } from '@angular/core';
import { AsideBarComponent } from "../../../Shared/aside-bar/aside-bar.component";
import { FormAccionesCreateComponent } from '../../../Shared/forms/form-acciones-create/form-acciones-create.component';

@Component({
  selector: 'app-acciones-create',
  standalone: true,
  imports: [AsideBarComponent, FormAccionesCreateComponent],
  templateUrl: './acciones-create.component.html',
  styleUrl: './acciones-create.component.css'
})
export default class AccionesCreateComponent {

}
