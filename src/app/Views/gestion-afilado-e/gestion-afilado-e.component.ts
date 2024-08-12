import { Component } from '@angular/core';
import { AsideBarUserComponent } from "../../Shared/aside-bar-user/aside-bar-user.component";
import { H1Component } from "../../Shared/h1/h1.component";
import { ContainerCardComponent } from "../../Shared/CardInfo/container-card/container-card.component";

@Component({
  selector: 'app-gestion-afilado-e',
  standalone: true,
  imports: [AsideBarUserComponent, H1Component, ContainerCardComponent],
  templateUrl: './gestion-afilado-e.component.html',
  styleUrl: './gestion-afilado-e.component.css'
})
export default class GestionAfiladoEComponent {

}
