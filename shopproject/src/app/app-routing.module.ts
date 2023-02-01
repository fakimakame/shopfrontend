import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StationComponent } from './module/station/components/station/station.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'station',
    loadChildren: ()=>
    import('./module/station/station.module').then(
      (m)=>m.StationModule
    )
  },
  {
    path:'user',
    loadChildren:()=>
    import ('./module/user/user.module').then(
      (m) => m.UserModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
