import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiModule } from '../shared/modules/material-ui/material-ui.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavigationBarComponent } from './navigation-bar.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const routes:Routes = [
  {
    path:'',
    component:NavigationBarComponent,
    canActivate: [AuthGuard],
    children:[
  {
    path:'station',
    loadChildren: ()=>
    import('../module/station/station.module').then(
      (m)=>m.StationModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path:'user',
    loadChildren:()=>
    import ('../module/user/user.module').then(
      (m) => m.UserModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path:'product',
    loadChildren: () =>
    import ( '../module/product/product.module').then(
       (m) => m.ProductModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path:'store',
    loadChildren: () =>
    import ( '../module/store/store.module').then(
       (m) => m.StoreModule
    ),
    canActivate: [AuthGuard]
  },
]
},
]
@NgModule({
  declarations: [
    DashboardComponent,
    NavigationBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class NavigationRoutingModule { }
