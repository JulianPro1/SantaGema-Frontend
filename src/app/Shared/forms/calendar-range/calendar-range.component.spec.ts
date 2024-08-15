import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRangeComponent } from './calendar-range.component';

describe('CalendarRangeComponent', () => {
  let component: CalendarRangeComponent;
  let fixture: ComponentFixture<CalendarRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
