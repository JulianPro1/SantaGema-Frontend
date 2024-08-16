import { Component, Output, EventEmitter  } from '@angular/core';

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
export class CheckboxComponent {
  options: CheckboxOption[] = [
    { id: 'opcion1', label: 'Opción 1', value: 'opcion1', checked: false },
    { id: 'opcion2', label: 'Opción 2', value: 'opcion2', checked: false },
    { id: 'opcion3', label: 'Opción 3', value: 'opcion3', checked: false },
    { id: 'opcion4', label: 'Opción 4', value: 'opcion4', checked: false },
    { id: 'opcion5', label: 'Opción 5', value: 'opcion5', checked: false },
    { id: 'opcion6', label: 'Opción 6', value: 'opcion6', checked: false },
    { id: 'opcion7', label: 'Opción 7', value: 'opcion7', checked: false },
  ];

  @Output() selectedOptionsChange = new EventEmitter<any>();

  selectedOptions: any = [];

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