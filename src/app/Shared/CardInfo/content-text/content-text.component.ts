import { Component, input } from '@angular/core';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-content-text',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './content-text.component.html',
  styleUrl: './content-text.component.css'
})
export class ContentTextComponent {
  strongText = input.required<string>();
  pText = input.required<string>();
  whiteSpace = input<string>();
}
