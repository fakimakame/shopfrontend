import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule, EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { defaultDataServicesConfig, entityConfig, entityMetadata } from './entity-metadata';
import { StationDataService } from '../services/station/station-data.service';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserDataService } from '../services/user/user.data.service';
import { NgrxDataToastService } from './ngrx-data-toast-service';
import { ToastrService } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)

    //configure ngrx devtool
  ],
  exports:[EffectsModule,EntityDataModule],
  providers:[
    
    StationDataService,
    UserDataService,
    {provide: DefaultDataServiceConfig, useValue: defaultDataServicesConfig}
  ]
})
export class NgrxDataStoreModule {
  constructor(
    entityDefinitionService:EntityDefinitionService,
    eds:EntityDataService,
    ngrxDataToastService:NgrxDataToastService,
    private stationDataService:StationDataService,
    private userDataService:UserDataService,
  ){
    entityDefinitionService.registerMetadataMap(entityMetadata)
    eds.registerServices({
      Station:stationDataService,
      User:userDataService,
    })
  }
 }
