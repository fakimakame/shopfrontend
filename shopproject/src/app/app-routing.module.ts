import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'',
  //   component:DashboardComponent,
  //   data:{isLogin:true}
  // },
  {
    path:'',
    loadChildren: () =>
    import('./module/login/login.module').then(
      (m) => m.LoginModule
    )
  },
  {
    path:'system',
    loadChildren: () =>
    import('./navigation-bar/navigation-routing.module').then(
      (m) => m.NavigationRoutingModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
