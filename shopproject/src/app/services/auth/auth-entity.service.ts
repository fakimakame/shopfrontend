import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { User } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class AuthEntityService extends EntityCollectionServiceBase<User> {

  constructor(private http:HttpClient,private serviceElementsFactory:EntityCollectionServiceElementsFactory) { 
    super('Auth',serviceElementsFactory)
  }
}
