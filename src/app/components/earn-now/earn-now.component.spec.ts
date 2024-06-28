import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnNowComponent } from './earn-now.component';

describe('EarnNowComponent', () => {
  let component: EarnNowComponent;
  let fixture: ComponentFixture<EarnNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarnNowComponent]
    });
    fixture = TestBed.createComponent(EarnNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
