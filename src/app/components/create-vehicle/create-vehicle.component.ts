import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../models/customer.model";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import { Vehicle } from 'src/app/models/vehicle.model';
import {VehicleService} from "../../services/vehicle.service";

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  createVehicleform = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    price: new FormControl(''),
    vin: new FormControl('')
  });

  vehicle: Vehicle = new Vehicle();
  message: string = '';

  constructor(private route: ActivatedRoute,
              private vehicleService: VehicleService,
              private datePipe: DatePipe) {
    this.vehicle = new Vehicle();
  }

  ngOnInit(): void {
  }

  createVehicle(): void {
    this.prepareVehicle();
    this.vehicleService.create(this.vehicle)
        .subscribe({
          next: (res) => {
            this.message = res.message ? res.message : 'Customer was created!'
          },
          error: (e) => console.log(e)
        })
  }

  prepareVehicle() {
    this.vehicle = Object.assign(this.createVehicleform.value)
  }

  cancel() : void {
  }
}
