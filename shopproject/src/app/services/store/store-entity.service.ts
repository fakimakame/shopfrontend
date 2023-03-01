import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Store } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class StoreEntityService extends EntityCollectionServiceBase<Store> {

  constructor(private http:HttpClient, private readonly serviceElementFactory:EntityCollectionServiceElementsFactory) {
    super('Store',serviceElementFactory);
  }
}
