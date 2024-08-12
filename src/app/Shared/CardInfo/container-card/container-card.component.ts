import { Component } from '@angular/core';
import { CardHeaderComponent } from "../card-header/card-header.component";
import { CardBodyComponent } from "../card-body/card-body.component";

@Component({
  selector: 'app-container-card',
  standalone: true,
  imports: [CardHeaderComponent, CardBodyComponent],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.css'
})
export class ContainerCardComponent {

}
