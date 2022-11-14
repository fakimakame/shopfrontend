import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, HttpUrlGenerator } from '@ngrx/data';
import { StationModel } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class StationEntityService extends EntityCollectionServiceBase<StationModel> {

  constructor(
    private http:HttpClient,
    private readonly serviceElementsFactory:EntityCollectionServiceElementsFactory,
  ) {
    super('Station',serviceElementsFactory)
   }
}
