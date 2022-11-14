import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { entityConfig, entityMetadata } from './entity-metadata';
import { StationDataService } from '../services/station/station-data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  exports:[EffectsModule,EntityDataModule],
  providers:[
    StationDataService,
  ]
})
export class NgrxDataStoreModule {
  constructor(
    entityDefinitionService:EntityDefinitionService,
    eds:EntityDataService,
    private stationDataService:StationDataService,
  ){
    entityDefinitionService.registerMetadataMap(entityMetadata)
    eds.registerServices({
      station:stationDataService,
    })
  }
 }
