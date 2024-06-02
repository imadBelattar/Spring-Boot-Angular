import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleManagementComponent } from './module-management.component';

describe('ModuleManagementComponent', () => {
  let component: ModuleManagementComponent;
  let fixture: ComponentFixture<ModuleManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
