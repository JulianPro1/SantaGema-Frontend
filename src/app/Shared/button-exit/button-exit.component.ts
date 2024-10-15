import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-button-exit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button-exit.component.html',
  styleUrl: './button-exit.component.css'
})
export class ButtonExitComponent {
  ruta = input.required<string>();
}
