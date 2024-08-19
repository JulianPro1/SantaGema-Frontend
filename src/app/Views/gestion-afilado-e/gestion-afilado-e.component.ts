import { Component } from '@angular/core';
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";
import { H1Component } from "../../Shared/h1/h1.component";
import { CardAfiliadoEComponent } from "../../Shared/card-afiliado-e/card-afiliado-e.component";

@Component({
  selector: 'app-gestion-afilado-e',
  standalone: true,
  imports: [AsideBarComponent, H1Component, CardAfiliadoEComponent],
  templateUrl: './gestion-afilado-e.component.html',
  styleUrl: './gestion-afilado-e.component.css'
})
export default class GestionAfiladoEComponent {

}
