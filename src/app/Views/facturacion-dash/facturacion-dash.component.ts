import { Component} from '@angular/core';
import { NgStyle, NgClass } from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-facturacion-dash',
  standalone: true,
  imports: [MatDividerModule,MatIconModule,MatButtonModule,NgClass,NgStyle],
  templateUrl: './facturacion-dash.component.html',
  styleUrl: './facturacion-dash.component.css'
})
export default class FacturacionDashComponent {

}
