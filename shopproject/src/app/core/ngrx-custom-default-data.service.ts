
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { DefaultDataService, HttpMethods, HttpUrlGenerator } from "@ngrx/data";
import { catchError, delay, map, Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class CustomDefaultDataService<T> extends DefaultDataService<T> {
    constructor(
      @Inject('entityName') entityName: string,
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator
      ) {
        super(entityName, http, httpUrlGenerator)
      }

      protected override execute(method: HttpMethods, url: string, data?: any, options?: any): Observable<any> {
          
        let result$: Observable<ArrayBuffer>
        
        switch(method){
            case 'DELETE':{
                result$=this.http.delete(url,options);
                if(this.saveDelay){
                    result$=result$.pipe(delay(this.saveDelay));
                }
                break;
            }
            case 'POST':{
                result$=this.http.post(url,data,options);
                if(this.saveDelay){
                    result$=result$.pipe(delay(this.saveDelay));
                }
                break;
            }
            case 'PUT':{
                result$=this.http.post(url,data,options);
                if(this.saveDelay){
                    result$=result$.pipe(delay(this.saveDelay));
                }
                break;
            }
            case 'GET':{
                result$=this.http.get(url,options);
                if(this.saveDelay){
                    result$=result$.pipe(delay(this.saveDelay));
                }
                break;
            }
            default:{
                const error = new Error('Unimplemented HTTP method, ' + method)
                result$ = throwError(error)
            }
        }
        return result$.pipe(
            map((response:any)=>{
              return response;
                // let httpResponseBody=this.formatResponseBody(response);
                // const responseBody={
                //     ...httpResponseBody,
                //     //pageInfo:{}
                // }
                // if(httpResponseBody.payload){
                //     responseBody.payload=httpResponseBody.payload
                // }
                // if(httpResponseBody.message){
                //     responseBody.message=httpResponseBody.message
                // }
                // if (response.headers && response.headers.get('x-pagination')) {
                //     responseBody.pageInfo = JSON.parse(
                //       response.headers.get('x-pagination') || '{}'
                //     )
                //   } 
                //   if(method === 'GET'){
                //     return responseBody
                //   }
                //   else {
                //     return responseBody
                //   }
                 
            }),
            catchError((err:any)=>{
                return throwError(()=>err)
            })
        )
      }

      private formatResponseBody(body: any) {
        if (typeof body === 'string' && this.isJson(body)) {
          body = JSON.parse(body);
        }
        return body;
      }
    
      private isJson(str: string) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return false;
        }
      }
}