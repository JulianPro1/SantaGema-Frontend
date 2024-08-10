import { Component,Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ButtonComponent } from "../../Shared/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  @ViewChild(ButtonComponent) btn ?: ElementRef

  constructor(private Render2:Renderer2, private elementRef:ElementRef ){

  }
  
}
