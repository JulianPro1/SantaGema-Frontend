import { Component, Output, EventEmitter, OnInit, inject  } from '@angular/core';
import { ActionsService } from "../../../Core/services/actions.service";
import { PermisosA  } from "../../../Core/Interfaces/permisos-a";

export interface CheckboxOption {
  id: string;
  label: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent implements OnInit {
  actionService = inject(ActionsService);
  results !: PermisosA
  @Output() selectedOptionsChange = new EventEmitter<any>();

  selectedOptions: any = [];


  ngOnInit(): void {
    this.actionService.getPermisosAll().subscribe( response => {

      this.results = response
      console.log('Luego de recuperar la data');
      console.log(this.results);
    })
  }

  updateSelectedOptions(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.selectedOptions.push(value);
    } else {
      this.selectedOptions = this.selectedOptions.filter((option: any) => option !== value);
    }
    this.selectedOptionsChange.emit(this.selectedOptions.slice()); 
  }
}