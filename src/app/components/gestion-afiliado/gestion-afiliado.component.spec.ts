import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAfiliadoComponent } from './gestion-afiliado.component';

describe('GestionAfiliadoComponent', () => {
  let component: GestionAfiliadoComponent;
  let fixture: ComponentFixture<GestionAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAfiliadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
