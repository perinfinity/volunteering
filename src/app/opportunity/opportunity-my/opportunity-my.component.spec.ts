import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityMyComponent } from './opportunity-my.component';

describe('OpportunityMyComponent', () => {
  let component: OpportunityMyComponent;
  let fixture: ComponentFixture<OpportunityMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpportunityMyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpportunityMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
