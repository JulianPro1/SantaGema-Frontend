import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesCreateComponent } from './roles-create.component';

describe('RolesCreateComponent', () => {
  let component: RolesCreateComponent;
  let fixture: ComponentFixture<RolesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
