import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainModule } from './components/main/main.module';
import {DashboardComponent} from "./services/pages/dashboard/dashboard.component";
import {AddServiceComponent} from "./services/pages/add-service/add-service.component";
import {SearchComponent} from "./services/pages/search/search.component";
import {EditarServiceComponent} from "./components/main/editar-service/editar-service.component";
import {AgencyProfileComponent} from "./agencies/pages/agency-profile/agency-profile.component";
import {CustomerProfileComponent} from "./customers/pages/customer-profile/customer-profile.component";

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'service', component: AddServiceComponent},
  {path: 'search', component: SearchComponent},
  {path: 'edit', component: EditarServiceComponent},
  {path: 'agency-profile', component: AgencyProfileComponent},
  {path: 'customer-profile', component: CustomerProfileComponent},
  {path: 'add-service', component: AddServiceComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
