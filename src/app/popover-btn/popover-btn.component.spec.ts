import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverBtnComponent } from './popover-btn.component';

describe('PopoverBtnComponent', () => {
  let component: PopoverBtnComponent;
  let fixture: ComponentFixture<PopoverBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
