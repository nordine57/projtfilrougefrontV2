import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureOccasionComponent } from './voiture-occasion.component';

describe('VoitureOccasionComponent', () => {
  let component: VoitureOccasionComponent;
  let fixture: ComponentFixture<VoitureOccasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoitureOccasionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoitureOccasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
