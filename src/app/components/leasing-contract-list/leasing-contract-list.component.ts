import { Component, OnInit } from '@angular/core';
import {LeasingContract} from "../../models/leasing-contract.model";
import {LeasingContractService} from "../../services/leasing-contract.service";


@Component({
  selector: 'app-leasing-contract-list',
  templateUrl: './leasing-contract-list.component.html',
  styleUrls: ['./leasing-contract-list.component.css']
})
export class LeasingContractListComponent implements OnInit {
  leasingContracts? : LeasingContract[];
  currentLeasingContract!: LeasingContract;

  constructor(private leasingContractService: LeasingContractService) { }

  ngOnInit(): void {
    this.retriveLeasingContracts();
  }

  retriveLeasingContracts(): void {
    this.leasingContractService.getAll()
        .subscribe({
          next:(data) => {
            this.leasingContracts = data;
          },
          error: (e) => console.error(e)
        })
  }

  onSelect(leasingContract: LeasingContract): void {
    this.currentLeasingContract = leasingContract;
  }

}
