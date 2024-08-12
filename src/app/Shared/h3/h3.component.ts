import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h3',
  standalone: true,
  imports: [],
  templateUrl: './h3.component.html',
  styleUrl: './h3.component.css'
})
export class H3Component {
  tittle = input.required<string>();
}
