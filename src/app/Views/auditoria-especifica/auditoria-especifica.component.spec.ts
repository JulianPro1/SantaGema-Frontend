import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaEspecificaComponent } from './auditoria-especifica.component';

describe('AuditoriaEspecificaComponent', () => {
  let component: AuditoriaEspecificaComponent;
  let fixture: ComponentFixture<AuditoriaEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditoriaEspecificaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriaEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
