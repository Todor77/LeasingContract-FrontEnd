import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import { Vehicle } from 'src/app/models/vehicle.model';
import {VehicleService} from "../../services/vehicle.service";
import {BrandService} from "../../services/brand.service";
import {Brand} from "../../models/brand";
import {Model} from "../../models/model";

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

  brands: Brand[] = [];
  models: Model[] = [];

  constructor(private route: ActivatedRoute,
              private vehicleService: VehicleService,
              private brandService: BrandService) {
    this.vehicle = new Vehicle();
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getAll()
        .subscribe({
          next: (res) => {
            this.brands = res;
            console.log("brands = " + this.brands[0].id + " name = "+ this.brands[0].name);
            console.log("brands = " + this.brands[1].id + " name = "+ this.brands[1].name);
            console.log("brands = " + this.brands[2].id + " name = "+ this.brands[2].name);
          },
          error: (e) => console.log(e)
        })
  }

  createVehicle(): void {
    this.prepareVehicle();

    console.log(this.vehicle);
    this.vehicleService.create(this.vehicle)
        .subscribe({
          next: (res) => {
            this.message = res.message ? res.message : 'Vehicle was created!'
          },
          error: (e) => console.log(e)
        })
  }

  prepareVehicle() {
    this.vehicle = Object.assign(this.createVehicleform.value)
  }

  selectBrand(target: any) {
    console.log("target = " + target.value);
    this.models = this.brands[target.value-1].models;
  }

  cancel() : void {
  }
}
