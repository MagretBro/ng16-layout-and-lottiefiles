import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsCardComponent } from './facts-card.component';

describe('FactsCardComponent', () => {
  let component: FactsCardComponent;
  let fixture: ComponentFixture<FactsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsCardComponent]
    });
    fixture = TestBed.createComponent(FactsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
