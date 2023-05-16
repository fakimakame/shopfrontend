import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const data:any=sessionStorage.getItem('token')
    const newRequest=request.clone({
      headers:request.headers
      .set('Authorization',`Bearer ${data}`)
      //.append('Details-Info','This is my detal Info')
    })
    return next.handle(newRequest)
    // return next.handle(request.clone({
    //   setHeaders :{'Authorization': `Bearer ${data}`}
    // }));
  }
}
