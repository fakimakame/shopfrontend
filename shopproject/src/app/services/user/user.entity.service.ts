import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { User } from '../../core/index';


@Injectable({
  providedIn: 'root'
})
export class UserEntityService extends EntityCollectionServiceBase<User> {
  constructor(
    private http:HttpClient,
    private readonly serviceElementsFactory:EntityCollectionServiceElementsFactory,
  ) {
    super('User',serviceElementsFactory)
   }
}
