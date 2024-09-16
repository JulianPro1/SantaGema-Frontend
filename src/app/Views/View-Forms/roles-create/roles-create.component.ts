import { Component } from '@angular/core';
import { AsideBarComponent } from "../../../Shared/aside-bar/aside-bar.component";
import { FormRolesCreateComponent } from "../../../Shared/forms/form-roles-create/form-roles-create.component";

@Component({
  selector: 'app-roles-create',
  standalone: true,
  imports: [AsideBarComponent, FormRolesCreateComponent],
  templateUrl: './roles-create.component.html',
  styleUrl: './roles-create.component.css'
})
export default class RolesCreateComponent {

}
