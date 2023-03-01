import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from 'src/app/shared/modules/material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreDataComponent } from './components/store-data/store-data.component';
import { AddQuantityComponent } from './components/add-quantity/add-quantity.component';

const routes:Routes=[
  {
    path:'',
    component:StoreDataComponent
  }
]

@NgModule({
  declarations: [
    StoreDataComponent,
    AddQuantityComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class StoreModule { }
