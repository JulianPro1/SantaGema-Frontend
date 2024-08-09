import { Component,input} from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  T_heads = input.required<string[]>()

  ngOnInit(){

  }

}
