import { Component, OnInit, inject } from '@angular/core';
import { AsideBarComponent } from "../../aside-bar/aside-bar.component";
import { H1Component } from "../../h1/h1.component";
import { H2Component } from "../../h2/h2.component";
import AccionesCreateComponent from "../../../Views/View-Forms/acciones-create/acciones-create.component";
import { InputTextComponent } from "../input-text/input-text.component";
import { TextareaComponent } from "../textarea/textarea.component";
import { ButtonComponent } from "../../button/button.component";
import { ActionsService } from '../../../Core/services/actions.service';
import { PermisosA } from '../../../Core/Interfaces/interfacesResponse/permisos-a';


@Component({
  selector: 'app-form-acciones-create',
  standalone: true,
  imports: [AsideBarComponent, H1Component, H2Component, AccionesCreateComponent, InputTextComponent, TextareaComponent, ButtonComponent],
  templateUrl: './form-acciones-create.component.html',
  styleUrl: './form-acciones-create.component.css'
})
export class FormAccionesCreateComponent implements OnInit{
  actionService = inject(ActionsService)
  response !:PermisosA

  ngOnInit(): void {
    this.getPermisos()
  }

  getPermisos(){
    this.actionService.getPermisosAll().subscribe( response =>{
      console.log(response);
    })
  }
}
