import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterventionComponent } from './admin-intervention.component';

describe('AdminInterventionComponent', () => {
  let component: AdminInterventionComponent;
  let fixture: ComponentFixture<AdminInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInterventionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
