import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlGenerator } from '@ngrx/data';
import { Purchase } from 'src/app/core';
import { CustomDefaultDataService } from 'src/app/core/ngrx-custom-default-data.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseDataService extends CustomDefaultDataService<Purchase> {
  url=''
  constructor(http:HttpClient,httpUrlGenerator:HttpUrlGenerator) {
    super('Purchase',http,httpUrlGenerator);
    this.url=httpUrlGenerator.entityResource('Purchase','',true)
  }
}
