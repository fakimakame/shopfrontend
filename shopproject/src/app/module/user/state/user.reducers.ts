import { Action, createReducer, createReducerFactory, on } from "@ngrx/store";
import { InitialState } from "@ngrx/store/src/models";
import { User } from "src/app/model/user";
import { createUser, getAllSuccess, getAllUser } from "./user.action";
import { initialUserState, userAdapter } from "./user.state";
export const USER_REDUCER='user'
const _userReducer=createReducer(
    initialUserState,
    on(createUser,(state,action)=>{
        return userAdapter.addOne(action,state)
        // return {
        //     ...state,
        // }
    }),
    on(getAllUser,(state,action)=>{
        return{
            ...state,
        }
    }),
    on(getAllSuccess,(state,action)=>{
        return {
            ...state,
            user:action.user
        }
    })
)
export function userReducer(state:any,action:Action){
    return _userReducer(state,action);
}