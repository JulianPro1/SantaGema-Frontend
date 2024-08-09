import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAfiladoEComponent } from './gestion-afilado-e.component';

describe('GestionAfiladoEComponent', () => {
  let component: GestionAfiladoEComponent;
  let fixture: ComponentFixture<GestionAfiladoEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAfiladoEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAfiladoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
