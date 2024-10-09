import { Injectable,inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login, Auth } from "../Interfaces/interfacesResponse/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _http = inject(HttpClient);
  private readonly endPointUrl = 'http://localhost:3000/api/users/auth/login'

  constructor() { }

  login(obj:Login){
    const body = {
      ci: obj.ci,
      password: obj.password 
    }
    
    return this._http.post<Auth>(this.endPointUrl,body)
  }
}
