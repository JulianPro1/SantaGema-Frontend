import { Component } from '@angular/core';
import { AsideBarComponent } from '../../Shared/aside-bar/aside-bar.component'
import { H1Component } from "../../Shared/h1/h1.component";
import { DataTableComponent } from "../../Shared/data-table/data-table.component";
import { H3Component } from "../../Shared/h3/h3.component";

@Component({
  selector: 'app-gestion-roles',
  standalone: true,
  imports: [AsideBarComponent, H1Component, H3Component],
  templateUrl: './gestion-roles.component.html',
  styleUrl: './gestion-roles.component.css'
})
export default class GestionRolesComponent {

}
