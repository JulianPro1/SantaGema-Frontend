import { Component } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { H3Component } from "../../../Shared/h3/h3.component";

@Component({
  selector: 'app-auditoria',
  standalone: true,
  imports: [H1Component, H3Component],
  templateUrl: './auditoria.component.html',
  styleUrl: './auditoria.component.css'
})
export default class AuditoriaComponent {

}
