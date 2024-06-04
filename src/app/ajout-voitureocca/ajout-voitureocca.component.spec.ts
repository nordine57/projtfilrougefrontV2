import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVoitureoccaComponent } from './ajout-voitureocca.component';

describe('AjoutVoitureoccaComponent', () => {
  let component: AjoutVoitureoccaComponent;
  let fixture: ComponentFixture<AjoutVoitureoccaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutVoitureoccaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutVoitureoccaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
