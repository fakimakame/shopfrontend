import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/core';
import { CustomDefaultDataService } from 'src/app/core/ngrx-custom-default-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService extends CustomDefaultDataService<User> {

  url=''
  constructor(http:HttpClient,httpUrlGenerator:HttpUrlGenerator) {
    super('Auth',http,httpUrlGenerator)
    this.url = httpUrlGenerator.entityResource('Auth','',true)
   }
    
   override add(entity: User): Observable<any> {
       return super.execute('POST',`${this.url}login`,entity).pipe(
        map(res =>{
          console.log('result inside service',res)
          const response ={
            ...res,
            id:1,
          }
          return response
        })
       )
   }
}
