import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import {AddServiceComponent} from "./services/pages/add-service/add-service.component";
import {AgencyProfileComponent} from "./agencies/pages/agency-profile/agency-profile.component";
import {CustomerProfileComponent} from "./customers/pages/customer-profile/customer-profile.component";
import {AgenciesComponent} from "./agencies/pages/agencies/agencies.component";
import {HomeComponent} from "./shared/home/home.component";
import {ToursComponent} from "./tours/pages/tours/tours.component";

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tour', component: AddServiceComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'agencies', component: AgenciesComponent},
  {path: 'agency-profile/:id', component: AgencyProfileComponent},
  {path: 'tourist-profile/:id', component: CustomerProfileComponent},
  {path: 'add-tour/:id', component: AddServiceComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
