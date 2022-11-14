import { DefaultDataServiceConfig, EntityMetadataMap } from "@ngrx/data";
import { StationModel} from './index'

export const entityMetadata: EntityMetadataMap= {
    station :{
        selectId: (station:StationModel)=> station.stationId
    }

}

export const pluraNames={
    station:'station'
}

export const entityConfig={
    entityMetadata,
    pluraNames,
}

export const defaultDataServicesConfig:DefaultDataServiceConfig={
    root: '',
    entityHttpResourceUrls: {
      station: {
        entityResourceUrl: '/shop-api/station/',
        collectionResourceUrl: '/shop-api/station/',
      },
    }
}