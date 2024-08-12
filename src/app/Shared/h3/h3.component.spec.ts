import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3Component } from './h3.component';

describe('H3Component', () => {
  let component: H3Component;
  let fixture: ComponentFixture<H3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
