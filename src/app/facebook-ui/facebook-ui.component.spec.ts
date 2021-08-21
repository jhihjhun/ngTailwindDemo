import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookUIComponent } from './facebook-ui.component';

describe('FacebookUIComponent', () => {
  let component: FacebookUIComponent;
  let fixture: ComponentFixture<FacebookUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
