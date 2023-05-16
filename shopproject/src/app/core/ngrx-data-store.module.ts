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
import { ProductDataService } from '../services/product/product-data.service';
import { AuthDataService } from '../services/auth/auth-data.service';
import { StoreDataService } from '../services/store/store-data.service';
import { PurchaseDataService } from '../services/purchase/purchase-data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)

    //configure ngrx devtool
  ],
  exports:[EffectsModule,EntityDataModule],
  providers:[
    StationDataService,
    UserDataService,
    ProductDataService,
    AuthDataService,
    StoreDataService,
    PurchaseDataService,
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
    private productDataService:ProductDataService,
    private authDataService:AuthDataService,
    private storeDataService:StoreDataService,
    private purchaseDataService:PurchaseDataService,
  ){
    entityDefinitionService.registerMetadataMap(entityMetadata)
    eds.registerServices({
      Station:stationDataService,
      User:userDataService,
      Product:productDataService,
      Auth:authDataService,
      Store:storeDataService,
      Purchase:purchaseDataService,
    })
  }
 }
