import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiModule } from 'src/app/shared/modules/material-ui/material-ui.module';

const routes:Routes =[
  {
    path:'',
    component:LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginModule { }
