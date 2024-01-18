import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSelectComponent } from './power-select.component';

describe('PowerSelectComponent', () => {
  let component: PowerSelectComponent;
  let fixture: ComponentFixture<PowerSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowerSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
