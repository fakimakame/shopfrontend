import { createAction, props } from "@ngrx/store"
import { User } from "src/app/model/user"
import { UserState } from "./user.state"

const CREATE_USER='{user page},create user'
const GET_ALL_USER='{user page},get all users'
const GET_ALL_SUCCESS='{user page},get all success'

export const createUser=createAction(CREATE_USER,props<User>())
export const getAllUser=createAction(GET_ALL_USER);
export const getAllSuccess=createAction(GET_ALL_SUCCESS,props<{user:User[]}>())
