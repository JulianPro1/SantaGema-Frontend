import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPagoComponent } from './form-pago.component';

describe('FormPagoComponent', () => {
  let component: FormPagoComponent;
  let fixture: ComponentFixture<FormPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
