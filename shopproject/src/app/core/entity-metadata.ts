import { DefaultDataServiceConfig, EntityMetadataMap } from "@ngrx/data";
import { StationModel, User} from './index'

export const entityMetadata: EntityMetadataMap= {
    Station :{
        selectId: (station:StationModel)=> station.id
    },
    User :{
      selectId: (user:User)=> user.id
  }

}

export const pluraNames={
    Station:'Station',
    User:'User',
}

export const entityConfig={
    entityMetadata,
    pluraNames,
}

export const defaultDataServicesConfig:DefaultDataServiceConfig={
    root: '',
    entityHttpResourceUrls: {
      Station: {
        entityResourceUrl: '/shop-api/station/',
        collectionResourceUrl: '/shop-api/station/',
      },
      User: {
        entityResourceUrl: '/shop-api/users/',
        collectionResourceUrl: '/shop-api/users/',
      },
    },
}