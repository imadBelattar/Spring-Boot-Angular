import { ComponentFixture, TestBed } from '@angular/core/testing';



import { CreateInterventionComponent } from './intervention.component';

describe('InterventionComponent', () => {
  let component: CreateInterventionComponent;
  let fixture: ComponentFixture<CreateInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInterventionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
