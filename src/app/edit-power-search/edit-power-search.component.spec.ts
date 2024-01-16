import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPowerSearchComponent } from './edit-power-search.component';

describe('EditPowerSearchComponent', () => {
  let component: EditPowerSearchComponent;
  let fixture: ComponentFixture<EditPowerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPowerSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPowerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
