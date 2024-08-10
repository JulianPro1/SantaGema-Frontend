import { Component ,input, Directive} from '@angular/core';
import { CustomWidthDirective } from "../../Directives/custom-width.directive";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ CustomWidthDirective],
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



