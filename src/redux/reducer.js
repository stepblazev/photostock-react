import { combineReducers } from "redux";
import { authReducer } from "./authorization/reducer";
import { imageReducer } from "./images/reducer";

export const reducer = combineReducers(
    {
        auth: authReducer,
        images: imageReducer
    }
);