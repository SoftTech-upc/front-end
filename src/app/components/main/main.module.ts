import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../../services/pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AddServiceComponent } from '../../services/pages/add-service/add-service.component';
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule

import { FormsModule } from '@angular/forms';
import { EditarServiceComponent } from './editar-service/editar-service.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    DashboardComponent,
    AddServiceComponent,
    EditarServiceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    FormsModule,
    RouterLink
  ]
})
export class MainModule { }
