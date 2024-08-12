import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBarUserComponent } from './aside-bar-user.component';

describe('AsideBarUserComponent', () => {
  let component: AsideBarUserComponent;
  let fixture: ComponentFixture<AsideBarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideBarUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
