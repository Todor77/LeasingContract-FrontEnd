import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeasingContractListComponent} from "./components/leasing-contract-list/leasing-contract-list.component";
import {LeasingContractDetailsComponent} from "./components/leasing-contract-details/leasing-contract-details.component";
import {CustomerDetailsComponent} from "./components/customer-details/customer-details.component";
import {CreateCustomerComponent} from "./components/create-customer/create-customer.component";
import {CreateVehicleComponent} from "./components/create-vehicle/create-vehicle.component";
import {VehicleDetailsComponent} from "./components/vehicle-details/vehicle-details.component";
import {CreateLeasingContractComponent} from "./components/create-leasing-contract/create-leasing-contract.component";

const routes: Routes = [
  { path: '', redirectTo: 'leasingContracts', pathMatch: 'full' },
  { path: 'leasingContracts', component: LeasingContractListComponent },
  { path: 'leasingContracts/:id', component: LeasingContractDetailsComponent},
  { path: 'create/leasingcontract', component: CreateLeasingContractComponent},
  { path: 'customers/:id', component: CustomerDetailsComponent},
  { path: 'create/customer', component: CreateCustomerComponent},
  { path: 'create/vehicle', component: CreateVehicleComponent},
  { path: 'vehicle/:id', component: VehicleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
