import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogActions, MatDialogContent, MatDialogClose} from '@angular/material/dialog';



@Component({
  selector: 'app-modal-roles',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogClose],
  templateUrl: './modal-roles.component.html',
  styleUrl: './modal-roles.component.css'
})
export class ModalRolesComponent {

}
