import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../models/customer.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;
  message: string = '';

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private datePipe: DatePipe) {
    this.customer = new Customer();

  }

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.params["id"])
  }

  getCustomer(id: string): void {
    console.log("ID = " + id);
    this.customerService.get(id)
        .subscribe({
          next: (data) => {
            this.customer = data;
            this.birthDateTransform(this.customer);
          },
          error: (e) => console.error(e)
        });
  }

  saveCustomer(): void {
    this.customerService.update(this.customer.id, this.customer)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This Customer was updated'
          },
          error: (e) => console.log(e)
        })
  }

  birthDateTransform(customer: Customer): void {
    let customerBirthDate = this.datePipe.transform(this.customer.birthDate, 'yyyy-MM-dd');

    if(customerBirthDate) {
      this.customer.birthDate = customerBirthDate;
    }
  }



  cancel() : void {

  }

}
