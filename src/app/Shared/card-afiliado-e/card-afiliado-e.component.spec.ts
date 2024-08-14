import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAfiliadoEComponent } from './card-afiliado-e.component';

describe('CardAfiliadoEComponent', () => {
  let component: CardAfiliadoEComponent;
  let fixture: ComponentFixture<CardAfiliadoEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAfiliadoEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAfiliadoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
