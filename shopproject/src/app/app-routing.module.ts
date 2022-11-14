import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StationComponent } from './components/station/station.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'station',
    component:StationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
