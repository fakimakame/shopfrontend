import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from 'src/app/shared/modules/material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';

const routes : Routes=[
  {
    path: '',
    component:ProductComponent
  }
]

@NgModule({
  declarations: [
    ProductComponent,
    ProductFormComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }
