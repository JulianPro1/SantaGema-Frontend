import { Component } from '@angular/core';
import { AsideBtnComponent } from "../aside-btn/aside-btn.component";

@Component({
  selector: 'app-aside-bar',
  standalone: true,
  templateUrl: './aside-bar.component.html',
  imports: [AsideBtnComponent], 
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent {
  // ...
}