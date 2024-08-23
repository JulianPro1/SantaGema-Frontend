import { Component, inject } from '@angular/core';
import { AsideBarComponent } from '../../Shared/aside-bar/aside-bar.component'
import { H1Component } from "../../Shared/h1/h1.component";
import { H3Component } from "../../Shared/h3/h3.component";
import {  RouterLink , Router} from "@angular/router";

//IMPORTANTE
import {  JsonPipe } from "@angular/common";
import { RolesService } from "../../Core/services/roles.service";
//*********
import { Roles} from "../../Core/Interfaces/interfacesResponse/roles";
import { RolesSend } from "../../Core/Interfaces/interfacesSend/roles-send";

@Component({
  selector: 'app-gestion-roles',
  standalone: true,
  imports: [AsideBarComponent, H1Component, H3Component,JsonPipe,RouterLink],
  templateUrl: './gestion-roles.component.html',
  styleUrl: './gestion-roles.component.css'
})
export default class GestionRolesComponent {

  rolesService = inject(RolesService);
  router = inject(Router)
  result!:Roles
  enviarData:RolesSend = {name:'Profesora',description:'fua chaval', actions:[1]}
 

  ngOnInit(){
    this.GetRoles();
  }

  GetRoles(){
    this.rolesService.getRolesAll().subscribe( resp =>{
      console.log(resp.message)
      this.result = resp
    })
  }

  CreateRol(){
    this.rolesService.CreateRol(this.enviarData).subscribe(resp =>{
      console.log(resp)
      this.GetRoles()
    })
  }

  UpdateRol(id:number){
    this.rolesService.UpdateRol(id,this.enviarData).subscribe( resp =>{
      console.log(resp);
      this.GetRoles();
    })
  }

  DeleteRoles(id:number){
    this.rolesService.DeleteRol(id).subscribe( resp =>{
      console.log(resp)

      this.GetRoles()
    })
  }


}
  
