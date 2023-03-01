import { DefaultDataServiceConfig, EntityMetadataMap } from "@ngrx/data";
import { Product, Purchase, StationModel, Store, User} from './index'

export const entityMetadata: EntityMetadataMap= {
    Station :{
        selectId: (station:StationModel)=> station.id,
        additionalCollectionState: {
          pageInfo: {},
          message: null,
        },
    },
    User :{
      selectId: (user:User)=> user.id,
      additionalCollectionState: {
        pageInfo: {},
        message: null,
      },
  },
  Product :{
    selectId: (product:Product)=> product.id,
    additionalCollectionState: {
      pageInfo: {},
      message: null,
    },
  },
    Auth : {
      selectId: (auth : User) => auth.id,
      additionalCollectionState: {
        pageInfo: {},
        message: null,
      },
    },
    Store : {
      selectId: (store : Store) => store.id,
      additionalCollectionState: {
        pageInfo: {},
        message: null,
      },
    },
    Purchase : {
      selectId: (purchase : Purchase) => purchase.id,
      additionalCollectionState: {
        pageInfo: {},
        message: null,
      },
    },
}

export const pluraNames={
    Station:'Station',
    User:'User',
    Auth: 'Auth',
    Store: 'Store',
    Product: 'Product',
    Purchase: 'Purchase',
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
      Product: {
        entityResourceUrl: '/shop-api/products/',
        collectionResourceUrl: '/shop-api/products/',
      },
      Auth: {
        entityResourceUrl: '/shop-api/auth/',
        collectionResourceUrl: '/shop-api/auth/',
      },
      Store: {
        entityResourceUrl: '/shop-api/store/',
        collectionResourceUrl: '/shop-api/store/',
      },
      Purchase: {
        entityResourceUrl: '/shop-api/purchase/',
        collectionResourceUrl: '/shop-api/purchase/',
      },
    },
}