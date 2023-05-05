import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { OffersComponent } from './offers/offers.component';
import { SharedModule } from '../shared/shared.module';
import { AddServiceComponent } from './add-service/add-service.component';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule

import { FormsModule } from '@angular/forms';
import { EditarServiceComponent } from './editar-service/editar-service.component';
import { AgenciesComponent } from './agencies/agencies.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    OffersComponent,
    AddServiceComponent,
    SearchComponent,
    EditarServiceComponent,
    AgenciesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatInputModule,
    FormsModule
  ]
})
export class MainModule { }
