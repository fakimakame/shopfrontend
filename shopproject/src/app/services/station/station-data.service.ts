import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { StationModel } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class StationDataService extends DefaultDataService<StationModel> {
  private url=''
  constructor(http:HttpClient, httpUrlGenerator:HttpUrlGenerator ) {
    super('Station', http,httpUrlGenerator);
    this.url=httpUrlGenerator.entityResource('Station','',true)
   }
}
