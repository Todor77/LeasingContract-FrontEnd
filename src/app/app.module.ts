import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeasingContractListComponent } from './components/leasing-contract-list/leasing-contract-list.component';
import { LeasingContractDetailsComponent } from './components/leasing-contract-details/leasing-contract-details.component';
import { CreateLeasingContractComponent } from './components/create-leasing-contract/create-leasing-contract.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { CreateVehicleComponent } from './components/create-vehicle/create-vehicle.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LeasingContractListComponent,
    LeasingContractDetailsComponent,
    CreateLeasingContractComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    VehicleDetailsComponent,
    CreateVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
