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
    console.log('this is my data inside interceptor',request.headers.get('Authorization'))
    return next.handle(request.clone({setHeaders :{'Authorization': `Bearer ${data}`}}));
  }
}
