import { Component,input} from '@angular/core';
import {AsideBarComponent} from '../../Shared/aside-bar/aside-bar.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [AsideBarComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  T_heads = input.required<string[]>()

  ngOnInit(){

  }

}
