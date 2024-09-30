import { Component, ElementRef, HostListener, Renderer2, ViewChild, inject } from '@angular/core';
import { NgClass,NgStyle } from "@angular/common";

import { H1Component } from "../../h1/h1.component";
import { H2Component } from "../../h2/h2.component";
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-form-gestion-usuarios-y-permisos',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    H1Component,
    H2Component,
    ButtonComponent
],
  templateUrl: './form-gestion-usuarios-y-permisos.component.html',
  styleUrl: './form-gestion-usuarios-y-permisos.component.css'
})
export class FormGestionUsuariosYPermisosComponent {

  @ViewChild('comboboxBtn') combobox!:ElementRef;
  @ViewChild('comboboxIcon') icon!:ElementRef;
  @ViewChild('main') dom!:ElementRef;
  @ViewChild('content') menu!:ElementRef;

  render2 = inject(Renderer2);

  @HostListener('document:click',['$event.target'])
  clickbtn($event:HTMLElement):void{
    if ($event === this.combobox.nativeElement || $event == this.icon.nativeElement) {
      this.render2.setStyle(this.menu.nativeElement,'display','flex');
    }
    else if($event === this.dom.nativeElement){
      this.render2.setStyle(this.menu.nativeElement,'display','none');
    }
    console.log($event)
  }

}
