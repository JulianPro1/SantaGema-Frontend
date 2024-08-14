import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFacturaComponent } from './card-factura.component';

describe('CardFacturaComponent', () => {
  let component: CardFacturaComponent;
  let fixture: ComponentFixture<CardFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFacturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
