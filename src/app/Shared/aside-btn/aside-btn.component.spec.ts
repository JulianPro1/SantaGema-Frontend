import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBtnComponent } from './aside-btn.component';

describe('AsideBtnComponent', () => {
  let component: AsideBtnComponent;
  let fixture: ComponentFixture<AsideBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
