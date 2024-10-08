import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../Shared/button/button.component";
import { AuthService } from "../../Core/services/auth.service";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { Auth } from '../../Core/Interfaces/interfacesResponse/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {

  authService = inject(AuthService);
  navigation = inject(Router);

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
        error: (err:Auth) =>{
          console.log(err.message)
          this.navigation.navigateByUrl('/');
          console.log('Usuario no existente');
          
        }
      }
    )
  }

  
}
