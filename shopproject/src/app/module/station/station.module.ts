import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './components/station/station.component';
import { StationTableComponent } from './components/station-table/station-table.component';
import { StationFormComponent } from './components/station-form/station-form.component';
import { MaterialUiModule } from 'src/app/shared/modules/material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


const routes:Routes=[
  {
    path:'',
    component:StationComponent
  }
]
@NgModule({
  declarations: [
    StationComponent,
    StationTableComponent,
    StationFormComponent,
  ],
  providers:[],
  imports: [
    CommonModule,
    MaterialUiModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class StationModule { }
