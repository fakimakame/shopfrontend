import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { Store } from 'src/app/core';
import { CustomDefaultDataService } from 'src/app/core/ngrx-custom-default-data.service';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService extends CustomDefaultDataService<Store> {
  url=''
  constructor(http:HttpClient,httpUrlGenerator:HttpUrlGenerator) {
    super('Store',http,httpUrlGenerator);
    this.url=httpUrlGenerator.entityResource('Store','',true)
  }

  override getAll(): Observable<Store[]> {
      return super.execute('GET',`${this.url}`).pipe(
        map((res:any)=>{
          const response:any=[]
          res.forEach((element:any) => {
            let { quantity, ...rest}= element
            if(quantity == null)
              quantity=0
            response.push({...rest,quantity})
          });
          return response
        })
      )
  }
}
