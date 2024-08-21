import { Component,input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-data-table-no-status',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './data-table-no-status.component.html',
  styleUrl: './data-table-no-status.component.css'
})
export class DataTableNoStatusComponent {
  T_heads = input.required<string[]>();

  rutaInfo = input<string>();
  ngOnInit(){

  }
}
