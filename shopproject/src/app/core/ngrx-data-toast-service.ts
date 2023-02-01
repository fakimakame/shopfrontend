import { Injectable } from "@angular/core";
import { EntityAction, ofEntityOp, OP_ERROR, OP_SUCCESS } from "@ngrx/data";
import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { filter, tap } from "rxjs/operators";
import  sweetalert from 'sweetalert2'

@Injectable({providedIn:'any'})
export class NgrxDataToastService{
    constructor(private $action:Actions,
        private toastService:ToastrService,)
    {
        $action.pipe(
            filter(
              (ea: any) =>
              ea.payload.entityOp.endsWith(OP_SUCCESS) ||
              ea.payload.entityOp.endsWith(OP_ERROR)
            )
        )
        .subscribe((action)=>{
            if(action.payload.entityOp.endsWith(OP_ERROR)){
                const error=action.payload.data.error.error
                this.handleError(error);
            }
            else{
                console.log('this is action',action)
            }
        })

    }

    handleError(error:any){
        let errorMsg=''
        let statusCode=error?.error?.statusCode
        let msg=error?.error?.message
        if(statusCode === 500){
            errorMsg= msg ? msg:'Internal server error'
        }
        else if (statusCode === 404){
            errorMsg=msg ? msg :'Not found'
        }
        else if(statusCode === 400){
            errorMsg=msg ? msg :'Bad request'
        }
        else {
            errorMsg=msg ? msg :'Error on our side'
        }
        this.toastService.error(errorMsg)
        //sweetalert.fire('success connected','error')
        
        
    }
}
