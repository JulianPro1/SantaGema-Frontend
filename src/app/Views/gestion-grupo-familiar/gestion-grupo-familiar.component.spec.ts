import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGrupoFamiliarComponent } from './gestion-grupo-familiar.component';

describe('GestionGrupoFamiliarComponent', () => {
  let component: GestionGrupoFamiliarComponent;
  let fixture: ComponentFixture<GestionGrupoFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGrupoFamiliarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGrupoFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
