import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionDashComponent } from './facturacion-dash.component';

describe('FacturacionDashComponent', () => {
  let component: FacturacionDashComponent;
  let fixture: ComponentFixture<FacturacionDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturacionDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
