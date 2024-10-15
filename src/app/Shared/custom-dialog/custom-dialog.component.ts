import { Component, ElementRef, HostListener, ViewChild, inject, Renderer2} from '@angular/core';
import { NgClass,NgStyle,AsyncPipe } from "@angular/common";
import { AlertsService } from "../../Core/services/alerts.service";

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    AsyncPipe
  ],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.css'
})
export class CustomDialogComponent {
  @ViewChild('exit') exitModal!:ElementRef;
  @ViewChild('dialog') dialog!:ElementRef;
  render2 = inject(Renderer2);
  alertService$ = inject(AlertsService);
  textError = this.alertService$.getTextError;

  @HostListener('document:click',['$event.target'])
  CerrarModal($event:HTMLElement):void{
    if($event === this.exitModal.nativeElement){
      this.render2.setStyle(this.dialog.nativeElement,'display', 'none');
      this.alertService$.setAlertLogin(false);
    }
  }

  
}
