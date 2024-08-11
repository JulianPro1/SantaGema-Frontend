import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaUsuariosComponent } from './auditoria-usuarios.component';

describe('AuditoriaUsuariosComponent', () => {
  let component: AuditoriaUsuariosComponent;
  let fixture: ComponentFixture<AuditoriaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditoriaUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
