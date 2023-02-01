import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { User } from '../../core/index';

@Injectable({
  providedIn: 'root'
})
export class UserDataService extends DefaultDataService<User> {
    private url=''
    constructor(http:HttpClient, httpUrlGenerator:HttpUrlGenerator ) {
      super('User', http,httpUrlGenerator);
      this.url=httpUrlGenerator.entityResource('User','',true)
     }
  }
