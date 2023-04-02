import { ERROR, FETCHING, SET_ORDER, SET_PAGE, SET_TAGS, SUCCESSFUL } from "./types";
import { ERROR_MESSAGE } from "../../_config";
import api from "../../http";

export function fetching() {
    return async (dispatch, getState) => {
        try {
            const { page, tags, order } = getState().images;
            dispatch({ type: FETCHING });

            const response = await api.get('/images', {
                params: {
                    _page: page,
                    _tags: tags.join(','),
                    _order: order,
                },
            });

            dispatch(imageSuccessful(response.data));
        } catch (error) {
            dispatch(imageError(error?.response?.data?.message || ERROR_MESSAGE));
        }
    }
}

export function imageSuccessful(images) {
    return { type: SUCCESSFUL, payload: images };
}

export function imageError(message) {
    return { type: ERROR, payload: message };
}

export function setTags(tags) {
    return { type: SET_TAGS, payload: tags };
}

export function setOrder(order) {
    return { type: SET_ORDER, payload: order };
}

export function setPage(page = 1) {
    page = page > 0 ? page : 1;
    return { type: SET_PAGE, payload: page };
}
