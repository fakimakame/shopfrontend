import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgrxDataStoreModule } from './core/ngrx-data-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MaterialUiModule } from './shared/modules/material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserTabComponent } from './user-tab/user-tab.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
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
    MaterialUiModule,
    ToastrModule.forRoot({positionClass :'toast-bottom-right'}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    
  ],
  providers: [ToastrService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
