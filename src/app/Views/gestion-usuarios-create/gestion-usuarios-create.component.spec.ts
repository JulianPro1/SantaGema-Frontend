import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsuariosCreateComponent } from './gestion-usuarios-create.component';

describe('GestionUsuariosCreateComponent', () => {
  let component: GestionUsuariosCreateComponent;
  let fixture: ComponentFixture<GestionUsuariosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionUsuariosCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionUsuariosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
