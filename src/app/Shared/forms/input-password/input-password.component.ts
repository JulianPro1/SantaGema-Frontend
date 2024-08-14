import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }
}
