import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private alertLogin = new BehaviorSubject<boolean>(false);
  private textError$ = new BehaviorSubject<string>('');

  get getAlertLogin() : Observable<boolean> {
    return  this.alertLogin.asObservable();
  }

 setAlertLogin(value :boolean ):void {
    this.alertLogin.next(value);
  }

  
  get getTextError() : Observable<string> {
    return this.textError$.asObservable();
  }

  setTextError(value:string):void{
    this.textError$.next(value);
  }
  
  

  
  constructor() { }
}
