import { ChangeDetectionStrategy, Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-calendar-range',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-range.component.html',
  styleUrl: './calendar-range.component.css'
})
export class CalendarRangeComponent {

}
