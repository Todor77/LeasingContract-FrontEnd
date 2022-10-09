import {Component, Input, OnInit} from '@angular/core';
import {LeasingContract} from "../../models/leasing-contract.model";
import {LeasingContractService} from "../../services/leasing-contract.service";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {BrandService} from "../../services/brand.service";
import {Brand} from "../../models/brand";
import {Model} from "../../models/model";

@Component({
  selector: 'app-leasing-contract-details',
  templateUrl: './leasing-contract-details.component.html',
  styleUrls: ['./leasing-contract-details.component.css']
})
export class LeasingContractDetailsComponent implements OnInit {

  message = '';
  leasingContract: LeasingContract;

    brands: Brand[] = [];
    models: Model[] = [];
    tempmodels: Model[] = [];

  constructor(private leasingService: LeasingContractService,
              private route: ActivatedRoute,
              private router: Router,
              private brandService: BrandService,) {
    this.leasingContract = new LeasingContract();
  }

  ngOnInit(): void {
    this.getLeasingContract(this.route.snapshot.params["id"]);
      this.getBrands();

  }

  getLeasingContract(id: string): void {
    this.leasingService.get(id)
        .subscribe({
          next: (data) => {
            this.leasingContract = data;
          },
          error: (e) => console.error(e)
        });
  }

  saveLeasingContract(): void {
    this.leasingService.update(this.leasingContract.id, this.leasingContract)
        .subscribe({
          next: (res) => {
            this.message = res.message ? res.message : 'This Leasing Contract was updated!'
          },
          error: (e) => console.log(e)
        })
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
        let vehicleBrand = this.leasingContract.vehicle?.brand;
        this.brands.forEach(function(brand) {
            if(vehicleBrand === brand.name) {
                tempmodels = brand.models;
            }
        })
        this.models = tempmodels;
    }

    selectBrand(target: any) {
        this.models = this.brands[target.value-1].models;
        if(this.leasingContract.vehicle) {
            this.leasingContract.vehicle.brand = this.brands[target.value-1].name;
            this.leasingContract.vehicle.model = this.models[0].name;
        }
    }

    selectModel(target: any) {
        let tempModel;
        this.models.forEach(function(model) {
            if(target.value === model.name) {
                tempModel = model.name;
            }
        })
        if(this.leasingContract.vehicle) {
            this.leasingContract.vehicle.model = tempModel;
        }
    }



  cancel() : void {
      this.router.navigate(['/']);
  }

}
