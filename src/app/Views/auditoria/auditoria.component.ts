import { Component } from '@angular/core';
import { H1Component } from "../../Shared/h1/h1.component";
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";
import { H3Component } from "../../Shared/h3/h3.component";

@Component({
  selector: 'app-auditoria',
  standalone: true,
  imports: [H1Component, AsideBarComponent, H3Component],
  templateUrl: './auditoria.component.html',
  styleUrl: './auditoria.component.css'
})
export default class AuditoriaComponent {

}
