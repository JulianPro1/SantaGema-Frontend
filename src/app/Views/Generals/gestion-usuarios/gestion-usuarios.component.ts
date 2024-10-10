import { Component, inject } from '@angular/core';
import { H1Component } from "../../../Shared/h1/h1.component";
import { SearchBarComponent } from "../../../Shared/search-bar/search-bar.component";
import { DataTableComponent } from "../../../Shared/data-table/data-table.component";
import { H3Component } from "../../../Shared/h3/h3.component";
import {ButtonComponent} from '../../../Shared/button/button.component'
import { RouterLink } from "@angular/router";
import { UsersService } from '../../../Core/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersGet } from '../../../Core/Interfaces/interfacesResponse/users';
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [
    H1Component, 
    SearchBarComponent, 
    DataTableComponent, 
    H3Component,
    ButtonComponent,
    RouterLink,
    JsonPipe
  ],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export default class GestionUsuariosComponent {
  arrayEncabezados:string[] = ['Nombre', 'Cedula', 'Rol', 'Fecha de Accion'];  
  content:string = 'end'; 
  userService$ = inject(UsersService);
  user!:UsersGet

  ngOnInit(){
    this.userService$.getUsersAll().subscribe({
      next: (resp) => {
        this.user = resp
        console.log(this.user)
      },
      error: (err:HttpErrorResponse) => {
        console.log(err.error.message);
      },
    })
  }

}
