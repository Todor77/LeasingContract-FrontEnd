import { Component, OnInit } from '@angular/core';
import {LeasingContract} from "../../models/leasing-contract.model";
import {LeasingContractService} from "../../services/leasing-contract.service";
import {Vehicle} from "../../models/vehicle.model";
import {Customer} from "../../models/customer.model";

@Component({
  selector: 'app-create-leasing-contract',
  templateUrl: './create-leasing-contract.component.html',
  styleUrls: ['./create-leasing-contract.component.css']
})
export class CreateLeasingContractComponent implements OnInit {

  leasingContract : LeasingContract = {
    contractNumber: 0,
    monthlyRate: 0,
    vehicle: new Vehicle(),
    customer: new Customer()
  }

  vehicleId: number = 0;
  submitted = false;

  constructor(private leasingContractService: LeasingContractService) { }

  ngOnInit(): void {
  }

  saveLeasingContract(): void {
    const data = {
      contractNumber: this.leasingContract.contractNumber,
      monthlyRate: this.leasingContract.monthlyRate,
      vehicle: new Vehicle()
    };

//need to be fixed dinamicaly
    let vehicle = new Vehicle();
    vehicle.id = this.vehicleId;
    data.vehicle = vehicle;


    this.leasingContractService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
  }

  newLeasingContract(): void {
    this.submitted = false;
    this. leasingContract = {
      contractNumber: undefined,
      monthlyRate: undefined,
      vehicle: undefined
    };
  }

}
