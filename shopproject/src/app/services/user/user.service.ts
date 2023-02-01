import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url=''
  constructor(
    private http:HttpClient,
    httpUrlGenerator:HttpUrlGenerator,
    
  ) {
    this.url=httpUrlGenerator.entityResource('User','',true);
   }

  getAll():Observable<User[]>{
    return this.http.get(this.url).pipe(
      map((res:any)=>{
        return res
      })
    )
  }
}
