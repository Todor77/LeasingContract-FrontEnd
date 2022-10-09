import { Component, OnInit } from '@angular/core';
import {LeasingContract} from "../../models/leasing-contract.model";
import {LeasingContractService} from "../../services/leasing-contract.service";
import {Vehicle} from "../../models/vehicle.model";
import {Customer} from "../../models/customer.model";
import {FormControl, FormGroup} from "@angular/forms";
import {VehicleService} from "../../services/vehicle.service";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-create-leasing-contract',
  templateUrl: './create-leasing-contract.component.html',
  styleUrls: ['./create-leasing-contract.component.css']
})
export class CreateLeasingContractComponent implements OnInit {


  leasingContractForm = new FormGroup({
    contractNumber: new FormControl(''),
    monthlyRate: new FormControl(''),
    customer: new FormControl(''),
    vehicle: new FormControl(''),
  });

  leasingContract: LeasingContract;
  message: string = ''

  vehicles: Vehicle[] = [];
  tempVehicles: Vehicle[] = [];
  customers: Customer[] = [];

  tempCustomer: Customer = new Customer();
  tempVehicle: Vehicle = new Vehicle();


  constructor(private leasingContractService: LeasingContractService,
              private vehicleService: VehicleService,
              private customerService: CustomerService) {
    this.leasingContract = new LeasingContract();
  }

  ngOnInit(): void {
    this.getAllVehicles();
    this.getAllCustomers();
  }

  createLeasingContract(): void {
    console
    this.prepareLeasingContract();
    this.leasingContractService.create(this.leasingContract)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'Leasing Contract was created!'
          },
          error: (e) => console.error(e)
        });
  }

  prepareLeasingContract() {

    this.leasingContract.contractNumber = Number(this.leasingContractForm.get('contractNumber')?.value);
    this.leasingContract.monthlyRate = Number(this.leasingContractForm.get('monthlyRate')?.value);

    this.tempCustomer.id = Number(this.leasingContractForm.get('customer')?.value);
    this.tempVehicle.id = Number(this.leasingContractForm.get('vehicle')?.value);
    this.leasingContract.customer = this.tempCustomer;
    this.leasingContract.vehicle = this.tempVehicle;

    this.resetTempObj();
  }

  resetTempObj() {
    this.tempVehicle = new Vehicle();
    this.tempCustomer = new Customer();
  }

  getAllCustomers() {
    this.customerService.getAll()
        .subscribe({
          next: (res) => {
            this.customers = res;
          },
          error: (e) => console.log(e)
        })
  }

  getAllVehicles() {
    this.vehicleService.getAll()
        .subscribe({
          next: (res) => {
            this.tempVehicles = res;
            this.filterVehicles();
          },
          error: (e) => console.log(e)
        })
  }

  filterVehicles() {
    for (let i = 0; i < this.tempVehicles.length; i++) {
      console.log(this.tempVehicles[i].id);
      console.log("available" +this.tempVehicles[i].available);

      if(this.tempVehicles[i].available === true) {
        this.vehicles.push(this.tempVehicles[i]);
      }
      console.log(this.vehicles);
    }

  }



  cancel() : void {
  }

}
