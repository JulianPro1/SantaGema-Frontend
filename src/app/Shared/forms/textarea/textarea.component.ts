import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css'
})
export class TextareaComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }
}
