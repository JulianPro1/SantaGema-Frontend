import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-desplegable',
  standalone: true,
  imports: [],
  templateUrl: './input-desplegable.component.html',
  styleUrl: './input-desplegable.component.css'
})
export class InputDesplegableComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }
}
