import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { ToastrService } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from '../../authorization.interceptor';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
const materialModules=[
  MatIconModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSliderModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  //MatDialogModule,
] 

@NgModule({
  declarations: [
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules
  ],
  exports :[ 
    ...materialModules,
    DataTableComponent,
  ],
  providers :[
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi:true
    },
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {data:{}}}
  ]
})
export class MaterialUiModule { }
