import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgrxDataStoreModule } from './core/ngrx-data-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MaterialUiModule } from './shared/modules/material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './module/station/components/station-table/material/material.module';
import { UserTabComponent } from './user-tab/user-tab.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DashboardComponent,
    UserTabComponent,
    
  ],
  imports: [
    MaterialUiModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    // StoreModule.forRoot({}),
    // EffectsModule.forRoot([]),
    // EntityDataModule.forRoot(entityMetadata),
    NgrxDataStoreModule,
    MaterialModule,
    ToastrModule.forRoot({positionClass :'toast-bottom-right'}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    
  ],
  providers: [ToastrService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
