import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeasingContractListComponent} from "./components/leasing-contract-list/leasing-contract-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'leasingContracts', pathMatch: 'full' },
  { path: 'leasingContracts', component: LeasingContractListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
