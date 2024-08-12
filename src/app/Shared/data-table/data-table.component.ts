import { Component,input} from '@angular/core';
import {AsideBarComponent} from '../../Shared/aside-bar/aside-bar.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [AsideBarComponent,RouterLink],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  T_heads = input.required<string[]>();

  rutaInfo = input<string>();
  ngOnInit(){

  }

}
