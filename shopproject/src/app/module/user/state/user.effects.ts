import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { UserService } from "src/app/services/user/user.service";
import { getAllSuccess, getAllUser } from "./user.action";

@Injectable()
export class UserEffects {
    constructor(
        private action$:Actions,
        private userService:UserService,
    ){}

    user$= createEffect(()=>{ 
        return this.action$.pipe(ofType(getAllUser),
            switchMap(() => {
                return this.userService.getAll().pipe(
                    map(user => {
                        // const user: { id: number; fullName: string; username: string; password: string; role: string; }[]= []
                        // res.forEach(element => {
                        //     user.push({...element})
                        // });
                        return getAllSuccess({user});
                    })
                );
            })
        );
    })
}