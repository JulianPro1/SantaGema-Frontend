import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-aside-btn',
  template: '<a [routerLink]="[ruta]"><i class="fas fa-home"></i> {{tittle}} </a>',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aside-btn.component.html',
  styleUrl: './aside-btn.component.css'
})
export class AsideBtnComponent {
  //* puede ser esta forma
  // @Input()
  // ruta!: string;
  // @Input()
  // tittle!: string;
  //? o esta que es la que utilizare
  @Input() ruta: string | undefined;
  @Input() tittle: string | undefined;
}
