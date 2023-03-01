import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core';
import { CustomDefaultDataService } from 'src/app/core/ngrx-custom-default-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService extends CustomDefaultDataService<Product> {
  private url=''
  constructor(http:HttpClient,httpUrlGenerator:HttpUrlGenerator) {
    super('Product',http,httpUrlGenerator);
    this.url=httpUrlGenerator.entityResource('Product','',true)
  }

  override delete(key: string | number): Observable<string | number> {
      return super.execute('DELETE',`${this.url}${key}`);
  }
}
