import { Component, inject, OnInit } from '@angular/core';
import { H1Component } from "../../h1/h1.component";
import { H2Component } from "../../h2/h2.component";
import { InputDesplegableComponent } from "../input-desplegable/input-desplegable.component";
import { ButtonComponent } from "../../button/button.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { MatDialog } from '@angular/material/dialog';
import { ModalRolesComponent } from '../modal-roles/modal-roles.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesSend } from '../../../Core/Interfaces/interfacesSend/roles-send';
import {  RolesService } from "../../../Core/services/roles.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-form-roles-create',
  standalone: true,
  imports: [
    H1Component,
    H2Component,
    InputDesplegableComponent,
    ButtonComponent,
    CheckboxComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-roles-create.component.html',
  styleUrl: './form-roles-create.component.css'
})
export class FormRolesCreateComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  private RolesService =  inject(RolesService);
  private Navigation = inject(Router);
  selectedOptions = [];
  FormResult:RolesSend = { name: '', description: '', actions: []};

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ModalRolesComponent, {
      data: {},
    }).afterClosed().subscribe(result => {
      this.selectedOptions = result;
    });
  }

  //? form 

  userForm: FormGroup = new FormGroup({
    NameRol: new FormControl(''),
    DescriptionRol: new FormControl('')
  });

  onSaveRol(){
    const arrayActions = this.selectedOptions.map(Number);
    this.FormResult.name = this.userForm.get('NameRol')?.value
    this.FormResult.description = this.userForm.get('DescriptionRol')?.value
    this.FormResult.actions = [...arrayActions];

    console.log(this.FormResult);
 
    this.RolesService.CreateRol(this.FormResult).subscribe( resp =>{
      console.log(resp)
      this.Navigation.navigateByUrl('/gestionRoles');

    })
  }



}