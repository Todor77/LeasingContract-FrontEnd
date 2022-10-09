import {Component, Input, OnInit} from '@angular/core';
import {LeasingContract} from "../../models/leasing-contract.model";
import {LeasingContractService} from "../../services/leasing-contract.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-leasing-contract-details',
  templateUrl: './leasing-contract-details.component.html',
  styleUrls: ['./leasing-contract-details.component.css']
})
export class LeasingContractDetailsComponent implements OnInit {

  message = '';
  leasingContract: LeasingContract;


  constructor(private leasingService: LeasingContractService,
              private route: ActivatedRoute) {
    this.leasingContract = new LeasingContract();
  }

  ngOnInit(): void {
    this.getLeasingContract(this.route.snapshot.params["id"])
  }

  getLeasingContract(id: string): void {
    console.log("ID = " + id);
    this.leasingService.get(id)
        .subscribe({
          next: (data) => {
            this.leasingContract = data;
            console.log("data = "+data);
            console.log("firstName = "+ this.leasingContract.customer);

          },
          error: (e) => console.error(e)
        });
  }

  saveLeasingContract(): void {
    this.leasingService.update(this.leasingContract.id, this.leasingContract)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This contract was updated'
          },
          error: (e) => console.log(e)
        })
  }



  cancel() : void {

  }

}
