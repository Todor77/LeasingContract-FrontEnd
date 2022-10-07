import { Component, OnInit } from '@angular/core';
import {LeasingContract} from "../../models/leasing-contract.model";
import {LeasingContractService} from "../../services/leasing-contract.service";
import {Vehicle} from "../../models/vehicle.model";
import {Customer} from "../../models/customer.model";
import {FormControl, FormGroup} from "@angular/forms";
import {VehicleService} from "../../services/vehicle.service";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-create-lesing-contract',
  templateUrl: './create-lesing-contract.component.html',
  styleUrls: ['./create-lesing-contract.component.scss']
})
export class CreateLesingContractComponent implements OnInit {


  leasingContractForm = new FormGroup({
    contractNumber: new FormControl(''),
    monthlyRate: new FormControl(''),
    customer: new FormControl(''),
    vehicle: new FormControl('')
  });

  leasingContract: LeasingContract;
  message: string = ''


  constructor(private leasingContractService: LeasingContractService,
              private vehicleService: VehicleService,
              private customerService: CustomerService) {
    this.leasingContract = new LeasingContract();
  }

  ngOnInit(): void {
  }

  createLeasingContract(): void {
    this.prepareLeasingContract();
//need to be fixed dinamicaly
    let vehicle = new Vehicle();
    vehicle.id = 1;
    this.leasingContract.vehicle = vehicle
    this.leasingContractService.create(this.leasingContract)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'Customer was created!'
          },
          error: (e) => console.error(e)
        });
  }

  prepareLeasingContract() {
    // this.leasingContract.contractNumber = this.leasingContractForm.get('contractNumber')
  }


  cancel() : void {
  }

}
