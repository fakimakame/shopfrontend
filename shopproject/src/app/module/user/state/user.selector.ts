import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";

export const getAllSelector=createFeatureSelector<UserState>('user')

export const getAllUserSelector=createSelector(   
    getAllSelector,
    (state)=>{
        return{
            ...state,
        }
    }
)