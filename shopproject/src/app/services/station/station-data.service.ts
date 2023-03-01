import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { StationModel } from 'src/app/core';
import { CustomDefaultDataService } from 'src/app/core/ngrx-custom-default-data.service';

@Injectable({
  providedIn: 'root'
})
export class StationDataService extends CustomDefaultDataService<StationModel> {
  private url=''
  constructor(http:HttpClient, httpUrlGenerator:HttpUrlGenerator ) {
    super('Station', http,httpUrlGenerator);
    this.url=httpUrlGenerator.entityResource('Station','',true)
   }

   override delete(key: string | number): Observable<string | number> {
       return super.execute('DELETE',`${this.url}${key}`)
   }
}
