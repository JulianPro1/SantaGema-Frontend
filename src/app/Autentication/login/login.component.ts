import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../Shared/button/button.component";
import { AuthService } from "../../Core/services/auth.service";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { Auth, ErrorAuth} from '../../Core/Interfaces/interfacesResponse/auth';
import { CustomDialogComponent } from "../../Shared/custom-dialog/custom-dialog.component";
import { Observable } from 'rxjs';
import { AsyncPipe } from "@angular/common";
import { AlertsService } from "../../Core/services/alerts.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    CustomDialogComponent,
    AsyncPipe
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  authService = inject(AuthService);
  navigation = inject(Router);
  alertService$ = inject(AlertsService)
  respAlert$ = this.alertService$.getAlertLogin;

  constructor( ){

  }

  loginForm: FormGroup = new FormGroup({
    ci: new FormControl(''),
    password: new FormControl(''),
    });

  IniciarSesion(){
    this.authService.login(this.loginForm.value).subscribe(
      {
        next: (resp) =>{
          localStorage.setItem('token',resp.user.token);
          this.navigation.navigateByUrl('/home/dashboard');
          console.log(resp.message);
         
        },
        error: (err:HttpErrorResponse) =>{
          console.log(err)
          this.navigation.navigateByUrl('/');
          console.log('Usuario no existente');
          
        }
      }
    )
  }


  
}
