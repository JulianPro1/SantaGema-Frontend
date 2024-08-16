import { Component, Inject, inject, model } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogActions, MatDialogContent, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { H2Component } from "../../h2/h2.component";
import RolesCreateComponent from '../../../Views/roles-create/roles-create.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-roles',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatDialogActions, 
    MatDialogContent, 
    MatDialogClose, 
    CheckboxComponent, 
    H2Component, 
    CommonModule 
  ],
  templateUrl: './modal-roles.component.html',
  styleUrl: './modal-roles.component.css'
})
export class ModalRolesComponent {

  constructor(private dialogRef: MatDialogRef<ModalRolesComponent>, @Inject(MAT_DIALOG_DATA) public data: RolesCreateComponent) { }

  selectedOptions: any = [];

  onClose() {
    this.dialogRef.close(this.selectedOptions);
  }

  onNoClick(): void {
    this.dialogRef.close(this.selectedOptions);
  }

  onSelectedOptionsChange(options: any) {
    this.selectedOptions = options;
  }
}