import { Component, input } from '@angular/core';

@Component({
  selector: 'app-h2',
  standalone: true,
  imports: [],
  templateUrl: './h2.component.html',
  styleUrl: './h2.component.css'
})
export class H2Component {
 tittle = input.required<string>();
}
