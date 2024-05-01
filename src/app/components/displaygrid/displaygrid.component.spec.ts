import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGridComponent } from './displaygrid.component';

describe('DisplaygridComponent', () => {
  let component: DisplayGridComponent;
  let fixture: ComponentFixture<DisplayGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
