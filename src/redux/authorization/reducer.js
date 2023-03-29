import { ERROR, LOGIN, LOGOUT } from "./types";

const initialState = {
    isAuth: false,
    username: null,
    avatar_url: null,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            const { username, avatar_url } = action.payload;
            return { isAuth: true, username, avatar_url, error: null };
        }
        case LOGOUT: {
            return { isAuth: false, username: null, avatar_url: null, error: null };
        }
        case ERROR: {
            return { isAuth: false, username: null, avatar_url: null, error: action.payload };
        }
        default:
            return state;
    }
}