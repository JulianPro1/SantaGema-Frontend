import { Component, ElementRef, HostListener, Renderer2, ViewChild, inject } from '@angular/core';
import { NgClass,NgStyle } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { H1Component } from "../../h1/h1.component";
import { H2Component } from "../../h2/h2.component";
import { ButtonComponent } from "../../button/button.component";
import { RolesService } from "../../../Core/services/roles.service";
import { UsersService } from "../../../Core/services/users.service";
import { Roles } from "../../../Core/Interfaces/interfacesResponse/roles";
import { HttpErrorResponse } from '@angular/common/http';
import { elementAt } from 'rxjs';
import { ButtonExitComponent } from "../../button-exit/button-exit.component";

@Component({
  selector: 'app-form-gestion-usuarios-y-permisos',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    FormsModule,
    ReactiveFormsModule,
    H1Component,
    H2Component,
    ButtonComponent,
    ButtonExitComponent
],
  templateUrl: './form-gestion-usuarios-y-permisos.component.html',
  styleUrl: './form-gestion-usuarios-y-permisos.component.css'
})
export class FormGestionUsuariosYPermisosComponent {
  render2 = inject(Renderer2);
  rolesService$ = inject(RolesService);
  userService$ = inject(UsersService);
  router = inject(Router);
  rutaDecision = inject(ActivatedRoute);
  SelectRolB:boolean = true;
  SelectRolName:string | undefined = 'Seleccionar un Rol';


  @ViewChild('comboboxBtn') combobox:ElementRef = new ElementRef('div');
  @ViewChild('comboboxIcon') icon:ElementRef = new ElementRef('img');
  @ViewChild('main') dom!:ElementRef;
  @ViewChild('content') menu:ElementRef = new ElementRef('ul');

  respRoles!:Roles;
  seleccionRol:number = 0;
  edit:boolean = false;


  userForm:FormGroup = new FormGroup({
    ci: new FormControl(''),
    name: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl(''),
    role_id: new FormControl('')
  });
  
  ngOnInit(){
    this.getRolesAll();

    let id = this.rutaDecision.snapshot.paramMap.get('id');

    if (id !== 'new') {
      this.edit = true
      this.SelectRolB = false;
      this.getRolId(+id!);
    }
  }

  @HostListener('document:click',['$event.target'])
  clickbtn($event:HTMLElement):void{
      if ($event === this.combobox.nativeElement || $event == this.icon.nativeElement) {
        this.render2.setStyle(this.menu.nativeElement,'display','flex');
      }
      else if($event === this.dom.nativeElement){
        this.render2.setStyle(this.menu.nativeElement,'display','none');
      }    
  }

  onSaveUser(){
    console.log(this.userForm.value);
    
    this.userService$.CreateUser(this.userForm.value).subscribe({
      next: (resp) => {
        console.log(resp);
        this.router.navigateByUrl('/home/gestionUsuarios');
        
      },
      error: (err:HttpErrorResponse) => {
        console.log(err.error.message);
      },
    })
  }

  editUser(){
    let ci = this.rutaDecision.snapshot.paramMap.get('id');
    this.userService$.updateUser(+ci!,this.userForm.value).subscribe(
      {
        next: (resp) => {
          this.router.navigateByUrl('/home/gestionUsuarios');
          console.log(resp)
        },
      }
    )
  }

  getRolId(id:number){
    this.userService$.getRolId(id).subscribe({
      next: (resp) => {
        console.log(resp)
        this.userForm.get('ci')?.setValue(resp.user?.ci);
        this.userForm.get('name')?.setValue(resp.user?.name);
        this.userForm.get('lastname')?.setValue(resp.user?.lastname);
        this.SelectRolName = resp.user?.role.name;
      },
    })
  }

  getRolesAll(){
    this.rolesService$.getRolesAll().subscribe({
      next: (resp) =>{
        this.respRoles = resp;
        console.log(this.respRoles)
      },
      error: (error) =>{
        console.log(error);
      }
    });
  }

  obtenerRol(rol:number,rolName:string){
    this.seleccionRol = rol;
    this.userForm.get('role_id')?.setValue(this.seleccionRol);
    this.render2.setStyle(this.menu.nativeElement,'display','none');
    this.SelectRolB = false;
    this.SelectRolName = rolName;
  } 
}
