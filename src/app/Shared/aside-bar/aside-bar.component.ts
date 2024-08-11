import { Component } from '@angular/core';
import {RouterLink} from '@angular/router'

@Component({
  selector: 'app-aside-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.css'
})
export class AsideBarComponent {

}
