import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vehicle} from "../../models/vehicle.model";
import {VehicleService} from "../../services/vehicle.service";
import {Brand} from "../../models/brand";
import {Model} from "../../models/model";
import {BrandService} from "../../services/brand.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: Vehicle;
  message: string = '';


    brands: Brand[] = [];
    models: Model[] = [];
    tempmodels: Model[] = [];

    constructor(private route: ActivatedRoute,
                private vehicleService: VehicleService,
                private brandService: BrandService,
                private router: Router) {
        this.vehicle = new Vehicle();

    }

    ngOnInit(): void {
        this.getVehicle(this.route.snapshot.params["id"]);
        this.getBrands();

    }

    getBrands() {
        this.brandService.getAll()
            .subscribe({
                next: (res) => {
                    this.brands = res;
                    this.setSelectedModels(this.tempmodels);
                },
                error: (e) => console.log(e)
            })
    }

    setSelectedModels(tempmodels: any) {
        let vehicleBrand = this.vehicle.brand;
        this.brands.forEach(function(brand) {
            if(vehicleBrand === brand.name) {
                tempmodels = brand.models;
            }
        })
        this.models = tempmodels;
    }

    getVehicle(id: string): void {
        this.vehicleService.get(id)
            .subscribe({
                next: (data) => {
                    this.vehicle = data;
                },
                error: (e) => console.error(e)
            });
    }

    saveVehicle(): void {
        this.vehicleService.update(this.vehicle.id, this.vehicle)
            .subscribe({
                next: (res) => {
                    this.message = res.message ? res.message : 'This Vehicle was updated!'
                },
                error: (e) => console.log(e)
            })
    }

    selectBrand(target: any) {
        this.models = this.brands[target.value-1].models;
        this.vehicle.brand = this.brands[target.value-1].name;
        this.vehicle.model = this.models[0].name
    }

    selectModel(target: any) {
        let tempModel;
        this.models.forEach(function(model) {
            if(target.value === model.name) {
                tempModel = model.name;
            }
        })
        this.vehicle.model = tempModel;
    }


    cancel() : void {
        this.router.navigate(['/']);
    }

}
