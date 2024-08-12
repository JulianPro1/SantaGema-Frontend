import { Component } from '@angular/core';
import { H3Component } from "../../h3/h3.component";
import { ContentTextComponent } from "../content-text/content-text.component";

@Component({
  selector: 'app-card-body',
  standalone: true,
  imports: [H3Component, ContentTextComponent],
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.css'
})
export class CardBodyComponent {

}
