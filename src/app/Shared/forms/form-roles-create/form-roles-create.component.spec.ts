import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRolesCreateComponent } from './form-roles-create.component';

describe('FormRolesCreateComponent', () => {
  let component: FormRolesCreateComponent;
  let fixture: ComponentFixture<FormRolesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRolesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRolesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
