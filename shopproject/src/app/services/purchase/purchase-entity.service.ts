import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Purchase } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseEntityService extends EntityCollectionServiceBase<Purchase> {

  constructor(private http:HttpClient,serviceElementFactory:EntityCollectionServiceElementsFactory) {
    super('Purchase',serviceElementFactory)
   }
}
