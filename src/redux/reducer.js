import { combineReducers } from "redux";
import { authReducer } from "./authorization/reducer";

export const reducer = combineReducers({ auth: authReducer });