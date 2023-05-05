import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { MainComponent } from './components/main/main.component';
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
import { CustomerProfileComponent } from './customers/pages/customer-profile/customer-profile.component';
import { AgenciesComponent } from './agencies/pages/agencies/agencies.component';
import { ServicesComponent } from './services/pages/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    AgencyProfileComponent,
    CustomerProfileComponent,
    AgenciesComponent,
    ServicesComponent,
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
    MatIconModule
  ],
  providers: [AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
