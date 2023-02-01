import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from 'src/app/shared/modules/material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './pages/user/user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from 'src/app/services/user/user.service';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { ToastrService } from 'ngx-toastr';


const routes:Routes=[
  {
    path:'',
    component:UserComponent,
  }
]
@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature('user',userReducer),
  ],
  providers:[
    UserService,
  ],
})
export class UserModule { }
