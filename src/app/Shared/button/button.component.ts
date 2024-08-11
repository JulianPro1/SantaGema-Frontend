import { Component ,input} from '@angular/core';
import { NgStyle } from "@angular/common";


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

width = input.required<string>();

constructor( ){
  
}

ngOnInit(){
  console.log(this.width());
}

ngAfterViewInit(){

  }


}