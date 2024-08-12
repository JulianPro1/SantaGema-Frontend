import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTextComponent } from './content-text.component';

describe('ContentTextComponent', () => {
  let component: ContentTextComponent;
  let fixture: ComponentFixture<ContentTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
