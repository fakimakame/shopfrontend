import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Product } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class ProductEntityService extends EntityCollectionServiceBase<Product>{

  constructor(
    private http:HttpClient,
    private serviceElementsFactory:EntityCollectionServiceElementsFactory,
  ) {
    super('Product',serviceElementsFactory);
  }
}
