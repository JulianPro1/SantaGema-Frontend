import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css'
})
export class InputNumberComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }
}