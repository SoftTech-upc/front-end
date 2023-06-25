import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import {AgencyProfileComponent} from "./agencies/pages/agency-profile/agency-profile.component";
import {AgenciesComponent} from "./agencies/pages/agencies/agencies.component";
import {HomeComponent} from "./shared/home/home.component";
import {ToursComponent} from "./tours/pages/tours/tours.component";
import {TouristProfileComponent} from "./tourists/pages/tourist-profile/tourist-profile.component";
import {AddTourComponent} from "./tours/pages/add-tour/add-tour.component";
import { AgencyReviewComponent } from './reviews/pages/agency-review/agency-review.component';
import { ToursReviewComponent } from './reviews/pages/tours-review/tours-review.component';
import { AddReservationComponent } from './reservations/pages/add-reservation/add-reservation.component';
import { AuthGuard } from './auth/helpers/auth.guard';
import {ToursDetailComponent} from "./tours/pages/tours-detail/tours-detail.component";
import {RegisterAgencyComponent} from "./auth/pages/register-agency/register-agency.component";
import {RegisterTouristComponent} from "./auth/pages/register-tourist/register-tourist.component";

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register/agency', component:RegisterAgencyComponent},
  {path: 'register/tourist', component:RegisterTouristComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'tours', component: ToursComponent, canActivate:[AuthGuard]},
  {path: 'agencies', component: AgenciesComponent, canActivate:[AuthGuard]},
  {path: 'agency/profile/:id', component: AgencyProfileComponent, canActivate:[AuthGuard]},
  {path: 'tourist/profile/:id', component: TouristProfileComponent, canActivate:[AuthGuard]},
  {path: 'agency-review', component: AgencyReviewComponent, canActivate:[AuthGuard]},
  {path: 'tour/review/:id', component: ToursReviewComponent, canActivate:[AuthGuard]},
  {path: 'tour/add', component: AddTourComponent, canActivate:[AuthGuard]},
  {path: 'tour/edit/:id', component: AddTourComponent, canActivate:[AuthGuard]},
  {path: 'tour/details/:id', component: ToursDetailComponent, canActivate:[AuthGuard]},
  {path: 'tour/reservation/:id', component: AddReservationComponent, canActivate:[AuthGuard]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
