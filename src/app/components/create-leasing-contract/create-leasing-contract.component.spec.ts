import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeasingContractComponent } from './create-leasing-contract.component';

describe('CreateLeasingContractComponent', () => {
  let component: CreateLeasingContractComponent;
  let fixture: ComponentFixture<CreateLeasingContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLeasingContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLeasingContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
