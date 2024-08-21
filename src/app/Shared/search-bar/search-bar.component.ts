import { Component , input, output} from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  tittle = input.required<string>();
  Busqueda = output<boolean>();

  Buscar():void{
    this.Busqueda.emit(true);
  }
}
