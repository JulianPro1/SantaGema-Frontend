import { Component ,input} from '@angular/core';
import { NgStyle } from "@angular/common";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle, RouterLink ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
tittle = input.required<string>();
width = input.required<string>();
ruta = input<string>();

constructor( ){
  
}

ngOnInit(){
}


}