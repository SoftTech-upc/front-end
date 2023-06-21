import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import {AgencyProfileComponent} from "./agencies/pages/agency-profile/agency-profile.component";
import {AgenciesComponent} from "./agencies/pages/agencies/agencies.component";
import {HomeComponent} from "./shared/home/home.component";
import {ToursComponent} from "./tours/pages/tours/tours.component";
import {TouristProfileComponent} from "./tourists/pages/tourist-profile/tourist-profile.component";
import {AddTourComponent} from "./tours/pages/add-tour/add-tour.component";

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'agencies', component: AgenciesComponent},
  {path: 'agency/profile/:id', component: AgencyProfileComponent},
  {path: 'tourist/profile/:id', component: TouristProfileComponent},
  {path: 'tour/add', component: AddTourComponent},
  {path: 'tour/edit/:id', component: AddTourComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
