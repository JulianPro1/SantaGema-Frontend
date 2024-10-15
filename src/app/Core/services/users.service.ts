import { Injectable, inject } from '@angular/core';
import { UsersSend} from "../Interfaces/interfacesSend/users-send";
import { HttpClient } from "@angular/common/http";
import { Users, UsersGet} from '../Interfaces/interfacesResponse/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly _http = inject(HttpClient);
  private readonly endpointURL = 'http://localhost:3000/api/users';

  getUsersAll(){
    return this._http.get<UsersGet>(this.endpointURL);
  }

  getRolId(id:number){
    return this._http.get<UsersGet>(`${this.endpointURL}/${id}`).pipe( );
  }

  CreateUser(user:UsersSend){
    const body = {
      ci: user.ci,
      name: user.name,
      lastname: user.lastname,
      password: user.password,
      role_id: user.role_id
    }

    return this._http.post<UsersSend>(this.endpointURL,body);
  }


  updateUser(id:number, user:UsersSend){
    const body = {
      ci: user.ci,
      name: user.name,
      lastname: user.lastname,
      password: user.password,
      role_id: user.role_id
    }

    return this._http.put<UsersSend>(`${this.endpointURL}/${id}`, body );
  }

}
