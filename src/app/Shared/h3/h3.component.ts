import { Component, input } from '@angular/core';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-h3',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './h3.component.html',
  styleUrl: './h3.component.css'
})
export class H3Component {
  tittle = input.required<string>();
  colorFont = input<string>();
}
