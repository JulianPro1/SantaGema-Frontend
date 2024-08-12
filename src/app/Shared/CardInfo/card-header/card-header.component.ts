import { Component } from '@angular/core';
import { H2Component } from "../../h2/h2.component";
import { ButtonComponent } from "../../button/button.component";
import { ContentTextComponent } from "../content-text/content-text.component";

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [H2Component, ButtonComponent, ContentTextComponent],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.css'
})
export class CardHeaderComponent {
  
}
