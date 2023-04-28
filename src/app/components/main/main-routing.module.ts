import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { OffersComponent } from './offers/offers.component';
import {AgencyProfileComponent} from "../agency-profile/agency-profile.component";

const routes: Routes = [
  {path:'', component: MainComponent, children: [
      {path:'', component: DashboardComponent},
      {path:'account', component: AccountComponent},
      {path:'offers', component: OffersComponent},
      {path: 'profile', component: AgencyProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
