import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { MainModule } from './components/main/main.module';

const routes: Routes = [
  {path:'', redirectTo: 'loggin', pathMatch:'full'},
  {path:'loggin', component:LogginComponent},
  {path: 'inicio', loadChildren:()=> import('./components/main/main.module').then(x=> x.MainModule)},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
