import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { User } from '../../core/index';


@Injectable({
  providedIn: 'root'
})
export class UserEntityService extends EntityCollectionServiceBase<User> {
  page$?: Observable<any>;
  message$?: Observable<any>;
  constructor(
    private http:HttpClient,
    private readonly serviceElementsFactory:EntityCollectionServiceElementsFactory,
  ) {
    super('User',serviceElementsFactory)
    this.page$ = this.selectors$['pageInfo$'];
    this.message$ = this.selectors$['message$'];
   }
}
