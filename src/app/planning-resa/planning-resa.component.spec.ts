import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningResaComponent } from './planning-resa.component';

describe('PlanningResaComponent', () => {
  let component: PlanningResaComponent;
  let fixture: ComponentFixture<PlanningResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningResaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanningResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
