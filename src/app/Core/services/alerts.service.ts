import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private alertLogin = new BehaviorSubject<boolean>(true);

  get getAlertLogin() : Observable<boolean> {
    return  this.alertLogin.asObservable();
  }

 setAlertLogin(value :boolean ):void {
    this.alertLogin.next(value);
  }
  

  
  constructor() { }
}
