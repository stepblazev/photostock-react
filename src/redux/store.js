import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { compose } from "redux";

export const store = createStore(reducer,
    compose(applyMiddleware(thunk))
);