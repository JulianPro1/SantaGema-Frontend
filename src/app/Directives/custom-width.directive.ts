import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appCustomWidth]',
  standalone: true
})
export class CustomWidthDirective {

  constructor( private el:ElementRef ) {
   }


}
