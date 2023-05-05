import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { OffersComponent } from './offers/offers.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { SearchComponent } from './search/search.component';
import { EditarServiceComponent } from './editar-service/editar-service.component';
import {AgencyProfileComponent} from "../../agencies/pages/agency-profile/agency-profile.component";
import {CustomerProfileComponent} from "../../customers/pages/customer-profile/customer-profile.component";
import { AgenciesComponent } from './agencies/agencies.component';

const routes: Routes = [
    {path:'', component: MainComponent, children:[
    {path:'', component: DashboardComponent},
    {path:'services', component: SearchComponent},
    {path:'offers', component: OffersComponent},
    {path:'service', component: AddServiceComponent},
    {path: 'edit', component: EditarServiceComponent},
    {path: 'agency-profile', component: AgencyProfileComponent},
    {path: 'customer-profile', component: CustomerProfileComponent},
    {path: 'agencies', component: AgenciesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
