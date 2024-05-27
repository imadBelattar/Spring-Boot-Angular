import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInterventionComponent } from './listintervention.component';

describe('ListinterventionComponent', () => {
  let component: ListInterventionComponent;
  let fixture: ComponentFixture<ListInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListInterventionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
