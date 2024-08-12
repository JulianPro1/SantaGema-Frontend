import { Component } from '@angular/core';
import { H1Component } from "../../Shared/h1/h1.component";
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";
import { AsideBarUserComponent } from "../../Shared/aside-bar-user/aside-bar-user.component";
import { ContainerCardComponent } from "../../Shared/CardInfo/container-card/container-card.component";

@Component({
  selector: 'app-gestion-contratos',
  standalone: true,
  imports: [H1Component, AsideBarComponent, AsideBarUserComponent, ContainerCardComponent],
  templateUrl: './gestion-contratos.component.html',
  styleUrl: './gestion-contratos.component.css'
})
export default class GestionContratosComponent {

}
