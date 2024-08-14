import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccionesCreateComponent } from './form-acciones-create.component';

describe('FormAccionesCreateComponent', () => {
  let component: FormAccionesCreateComponent;
  let fixture: ComponentFixture<FormAccionesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAccionesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAccionesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
