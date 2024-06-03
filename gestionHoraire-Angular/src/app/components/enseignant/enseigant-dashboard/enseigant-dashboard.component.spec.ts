import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseigantDashboardComponent } from './enseigant-dashboard.component';

describe('EnseigantDashboardComponent', () => {
  let component: EnseigantDashboardComponent;
  let fixture: ComponentFixture<EnseigantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnseigantDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnseigantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
