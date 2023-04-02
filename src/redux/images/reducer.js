import { ORDER_VALUES } from "../../_config";
import { ERROR, FETCHING, RESET_FILTER, SET_ORDER, SET_PAGE, SET_TAGS, SUCCESSFUL } from "./types";

const initialState = {
    images: [],
    loading: false,
    error: null,
    tags: [],
    order: ORDER_VALUES[0],
    page: 1,
    total: 0
}

export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...state, loading: true, images: [], error: null, total: 0 };
        case SUCCESSFUL:
            const { images, total } = action.payload
            return { ...state, loading: false, images, total, error: null };
        case ERROR:
            return { ...state, loading: false, total: 0, error: action.payload };
        case SET_TAGS:
            return { ...state, tags: action.payload };
        case SET_ORDER:
            return { ...state, order: action.payload };
        case SET_PAGE:
            return { ...state, page: action.payload };
        case RESET_FILTER:
            return { ...state, tags: initialState.tags, order: initialState.order, page: initialState.page };
        default:
            return state;
    }
}