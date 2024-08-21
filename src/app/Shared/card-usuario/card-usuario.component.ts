import { Component, input } from '@angular/core';
import { H1Component } from "../h1/h1.component";
import { H2Component } from "../h2/h2.component";
import { H3Component } from "../h3/h3.component";


@Component({
  selector: 'app-card-usuario',
  standalone: true,
  imports: [H1Component, H2Component, H3Component],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {
  tittle = input.required<string>();

}
