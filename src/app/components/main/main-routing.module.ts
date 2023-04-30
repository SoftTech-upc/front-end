import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { OffersComponent } from './offers/offers.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { SearchComponent } from './search/search.component';
import { EditarServiceComponent } from './editar-service/editar-service.component';

const routes: Routes = [
  {path:'', component: MainComponent, children:[
    {path:'', component: DashboardComponent},
    {path:'account', component: AccountComponent},
    {path:'offers', component: OffersComponent},
    {path:'service', component: AddServiceComponent},
    {path: 'search', component: SearchComponent},
    {path: 'edit', component: EditarServiceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }