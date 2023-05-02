import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from './components/shared/shared.module';
import { AgencyProfileComponent } from './agencies/pages/agency-profile/agency-profile.component';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AgencyService} from "./agencies/services/agency/agency.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogginComponent,
    MainComponent,
    AgencyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
