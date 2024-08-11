import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacuracionPagoComponent } from './facuracion-pago.component';

describe('FacuracionPagoComponent', () => {
  let component: FacuracionPagoComponent;
  let fixture: ComponentFixture<FacuracionPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacuracionPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacuracionPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
