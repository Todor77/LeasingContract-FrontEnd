import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingContractDetailsComponent } from './leasing-contract-details.component';

describe('LeasingContractDetailsComponent', () => {
  let component: LeasingContractDetailsComponent;
  let fixture: ComponentFixture<LeasingContractDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeasingContractDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeasingContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
