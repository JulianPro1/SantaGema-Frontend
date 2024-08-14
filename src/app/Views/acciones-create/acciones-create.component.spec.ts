import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesCreateComponent } from './acciones-create.component';

describe('AccionesCreateComponent', () => {
  let component: AccionesCreateComponent;
  let fixture: ComponentFixture<AccionesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
