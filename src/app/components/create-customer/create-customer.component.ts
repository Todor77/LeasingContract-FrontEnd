import { Component, OnInit } from '@angular/core';
import {Customer} from "../../models/customer.model";
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl('')
  });

  customer: Customer = new Customer();
  message: string = '';

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private datePipe: DatePipe,
              private router: Router) {
    this.customer = new Customer();
  }

  ngOnInit(): void {
  }

  createCustomer(): void {
    this.prepareCustomer();

    this.customerService.create(this.customer)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'Customer was created!'
          },
          error: (e) => console.log(e)
        })
  }

  prepareCustomer() {
    this.customer = Object.assign(this.createCustomerform.value)
  }

  cancel() : void {
    this.router.navigate(['/']);
  }

}
