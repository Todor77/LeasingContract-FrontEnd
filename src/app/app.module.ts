import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeasingContractListComponent } from './components/leasing-contract-list/leasing-contract-list.component';
import { LeasingContractDetailsComponent } from './components/leasing-contract-details/leasing-contract-details.component';
import { CreateLeasingContractComponent } from './components/create-leasing-contract/create-leasing-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    LeasingContractListComponent,
    LeasingContractDetailsComponent,
    CreateLeasingContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
