import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBoxComponent } from './ajout-box.component';

describe('AjoutBoxComponent', () => {
  let component: AjoutBoxComponent;
  let fixture: ComponentFixture<AjoutBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
