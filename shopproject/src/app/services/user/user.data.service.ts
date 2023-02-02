import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpMethods, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { CustomDefaultDataService } from 'src/app/core/ngrx-custom-default-data.service';
import { User } from '../../core/index';

@Injectable({
  providedIn: 'root'
})
export class UserDataService extends CustomDefaultDataService<User> {
    private url=''
    constructor(http:HttpClient, httpUrlGenerator:HttpUrlGenerator ) {
      super('User', http,httpUrlGenerator);
      this.url=httpUrlGenerator.entityResource('User','',true)
     }

     override getAll(): Observable<any[]> {
      return super.execute('GET',this.url)
     }
     override add(entity: User): Observable<User> {
      return super.execute('POST',this.url,entity)
      .pipe(
       map((res:any)=>{
        console.log("result inside add service====>",res)
         return res
       })
      )
     }

    override delete(key: string | number): Observable<any> {
      return super.execute('DELETE',`${this.url}/${key}`)
      .pipe(
       map(res=>{
        console.log('Result inside the service',res)
         return res
       })
      )
    }
    
     
  }
