import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainModule } from './components/main/main.module';
import {DashboardComponent} from "./services/pages/dashboard/dashboard.component";
import {AddServiceComponent} from "./services/pages/add-service/add-service.component";
import {AgencyProfileComponent} from "./agencies/pages/agency-profile/agency-profile.component";
import {CustomerProfileComponent} from "./customers/pages/customer-profile/customer-profile.component";
import {AgenciesComponent} from "./agencies/pages/agencies/agencies.component";
import {ServicesComponent} from "./services/pages/services/services.component";

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'service', component: AddServiceComponent},
  { path: 'services', component: ServicesComponent},
  {path: 'agencies', component: AgenciesComponent},
  {path: 'agency-profile/:id', component: AgencyProfileComponent},
  {path: 'customer-profile/:id', component: CustomerProfileComponent},
  {path: 'add-service/:id', component: AddServiceComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
