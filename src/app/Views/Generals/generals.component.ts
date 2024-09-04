import { Component } from '@angular/core';
import { AsideBarComponent } from "../../Shared/aside-bar/aside-bar.component";
import {  RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-generals',
  standalone: true,
  imports: [AsideBarComponent,RouterOutlet],
  templateUrl: './generals.component.html',
  styleUrl: './generals.component.css'
})
export class GeneralsComponent {

}
