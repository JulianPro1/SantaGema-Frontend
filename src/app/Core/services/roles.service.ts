import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { arrayRoles } from "../Interfaces/roles";
import {  Roles } from "../Interfaces/roles";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private readonly _http = inject(HttpClient)
  private readonly endpointURL = 'http://localhost:3000/api/roles';

  constructor( ) { }

  getRolesAll(){
    return this._http.get<Roles>(this.endpointURL)
  }

  getRolesId(id:number){
    return this._http.get<Roles>(`${this.endpointURL}/${id}`)
  }

  CreateRol(item:arrayRoles){
    const body = {
      name: item.name,
      description: item.description,
      actions: item.actions
    }
    this._http.post<arrayRoles>(this.endpointURL,body);
  }



}
