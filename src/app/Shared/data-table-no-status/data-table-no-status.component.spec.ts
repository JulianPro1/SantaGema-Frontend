import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableNoStatusComponent } from './data-table-no-status.component';

describe('DataTableNoStatusComponent', () => {
  let component: DataTableNoStatusComponent;
  let fixture: ComponentFixture<DataTableNoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTableNoStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableNoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
