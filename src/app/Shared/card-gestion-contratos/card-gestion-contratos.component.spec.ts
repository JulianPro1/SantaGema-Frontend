import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGestionContratosComponent } from './card-gestion-contratos.component';

describe('CardGestionContratosComponent', () => {
  let component: CardGestionContratosComponent;
  let fixture: ComponentFixture<CardGestionContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGestionContratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGestionContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
