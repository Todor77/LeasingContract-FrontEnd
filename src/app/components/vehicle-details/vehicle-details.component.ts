import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vehicle} from "../../models/vehicle.model";
import {VehicleService} from "../../services/vehicle.service";

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: Vehicle;
  message: string = '';

  constructor(private route: ActivatedRoute,
              private vehicleService: VehicleService) {
    this.vehicle = new Vehicle();

  }

  ngOnInit(): void {
    this.getVehicle(this.route.snapshot.params["id"])
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
            console.log(res);
            this.message = res.message ? res.message : 'This Vehicle was updated!'
          },
          error: (e) => console.log(e)
        })
  }


  cancel() : void {

  }

}
