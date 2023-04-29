import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { OffersComponent } from './offers/offers.component';
import { SharedModule } from '../shared/shared.module';
import { AddServiceComponent } from './add-service/add-service.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    OffersComponent,
    AddServiceComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
