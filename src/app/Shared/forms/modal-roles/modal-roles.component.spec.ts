import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRolesComponent } from './modal-roles.component';

describe('ModalRolesComponent', () => {
  let component: ModalRolesComponent;
  let fixture: ComponentFixture<ModalRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
