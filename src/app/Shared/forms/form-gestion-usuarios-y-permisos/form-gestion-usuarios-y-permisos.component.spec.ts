import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGestionUsuariosYPermisosComponent } from './form-gestion-usuarios-y-permisos.component';

describe('FormGestionUsuariosYPermisosComponent', () => {
  let component: FormGestionUsuariosYPermisosComponent;
  let fixture: ComponentFixture<FormGestionUsuariosYPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGestionUsuariosYPermisosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGestionUsuariosYPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
