import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h1',
  standalone: true,
  imports: [],
  templateUrl: './h1.component.html',
  styleUrl: './h1.component.css'
})
export class H1Component {
  tittle = input.required<string>();
}
