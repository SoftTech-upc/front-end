import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/pages/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { AgencyProfileComponent } from './agencies/pages/agency-profile/agency-profile.component';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import {HttpClientModule} from "@angular/common/http";
import {AgencyService} from "./agencies/services/agency/agency.service";
import {FormsModule} from "@angular/forms";
import { AgenciesComponent } from './agencies/pages/agencies/agencies.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddServiceComponent } from "./services/pages/add-service/add-service.component";
import { HomeComponent } from './shared/home/home.component';
import { ToursComponent } from './tours/pages/tours/tours.component';
import { TouristProfileComponent } from './tourists/pages/tourist-profile/tourist-profile.component';
import { ToursReviewComponent } from './reviews/pages/tours-review/tours-review.component';
import { AgencyReviewComponent } from './reviews/pages/agency-review/agency-review.component';
import { AddReservationComponent } from './reservations/pages/add-reservation/add-reservation.component';





import { CommonModule } from '@angular/common';

//Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';

//reactivos
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgencyProfileComponent,
    AgenciesComponent,
    NavbarComponent,
    AddServiceComponent,
    HomeComponent,
    ToursComponent,
    TouristProfileComponent,
    ToursReviewComponent,
    AgencyReviewComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  },AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
