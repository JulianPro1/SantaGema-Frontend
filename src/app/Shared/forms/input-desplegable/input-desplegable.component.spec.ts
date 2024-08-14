import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDesplegableComponent } from './input-desplegable.component';

describe('InputDesplegableComponent', () => {
  let component: InputDesplegableComponent;
  let fixture: ComponentFixture<InputDesplegableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDesplegableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
