import { EntityCollection } from "@ngrx/data";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { User } from "src/app/model/user";


export interface UserState extends EntityState<User>{
    //user:User[],
}

export const userAdapter = createEntityAdapter<User>()

export const initialUserState:UserState=userAdapter.getInitialState();