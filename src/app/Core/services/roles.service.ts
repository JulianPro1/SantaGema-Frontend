import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {  Roles } from "../Interfaces/interfacesResponse/roles";
import { RolesSend  } from "../Interfaces/interfacesSend/roles-send";


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

  CreateRol( item:RolesSend){
    const body = {
      name: item.name,
      description: item.description,
      actions: item.actions
    }

    return this._http.post<RolesSend>(this.endpointURL,body);
  }

  UpdateRol(id:number,item:RolesSend){
    const body = {
      name: item.name,
      description: item.description,
      actions: item.actions
    }

    return this._http.put<RolesSend>(`${this.endpointURL}/${id}`,body)
  }

  DeleteRol(id:number){
    return this._http.delete(`${this.endpointURL}/${id}`);
  }
}
