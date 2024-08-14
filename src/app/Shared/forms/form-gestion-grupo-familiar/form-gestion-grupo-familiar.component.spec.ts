import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGestionGrupoFamiliarComponent } from './form-gestion-grupo-familiar.component';

describe('FormGestionGrupoFamiliarComponent', () => {
  let component: FormGestionGrupoFamiliarComponent;
  let fixture: ComponentFixture<FormGestionGrupoFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGestionGrupoFamiliarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGestionGrupoFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
