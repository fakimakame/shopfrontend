import { DefaultDataServiceConfig, EntityMetadataMap } from "@ngrx/data";
import { StationModel} from './index'

export const entityMetadata: EntityMetadataMap= {
    Station :{
        selectId: (station:StationModel)=> station.stationId
    }

}

export const pluraNames={
    Station:'Station'
}

export const entityConfig={
    entityMetadata,
    pluraNames,
}

export const defaultDataServicesConfig:DefaultDataServiceConfig={
    root: '',
    entityHttpResourceUrls: {
      Station: {
        entityResourceUrl: '/shop-api/station',
        collectionResourceUrl: '/shop-api/station',
      },
    }
}