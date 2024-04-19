import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpportunityComponent } from './add-opportunity.component';

describe('AddOpportunityComponent', () => {
  let component: AddOpportunityComponent;
  let fixture: ComponentFixture<AddOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOpportunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
