import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PermisosA } from '../Interfaces/interfacesResponse/permisos-a';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
    private readonly _http = inject(HttpClient)
    private readonly endpointURL = 'http://localhost:3000/api/actions'

    getPermisosAll(){
      return this._http.get<PermisosA>(this.endpointURL);
    }


}
