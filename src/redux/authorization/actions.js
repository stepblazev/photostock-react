import { ERROR_MESSAGE } from "../../_config";
import AuthService from "../../services/AuthService";
import { LOGIN, LOGOUT, ERROR } from "./types";

export function login(username, password) {
    return async (dispatch) => {
        try {
            const response = await AuthService.login(username, password);
            const { avatar_url, accessToken } = response.data;

            localStorage.setItem("token", accessToken);
            const payload = { username, avatar_url };

            dispatch({ type: LOGIN, payload });
        } catch (error) {
            dispatch(authError(error?.response?.data?.message || ERROR_MESSAGE));
        }
    }
}

export function registration(username, password) {
    return async (dispatch) => {
        try {
            const response = await AuthService.registration(username, password);
            const { avatar_url, accessToken } = response.data;

            localStorage.setItem("token", accessToken);
            const payload = { username, avatar_url };

            dispatch({ type: LOGIN, payload });
        } catch (error) {
            dispatch(authError(error?.response?.data?.message || ERROR_MESSAGE));
        }
    }
}

export function logout() {
    return async (dispatch) => {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            dispatch({ type: LOGOUT });
        } catch (error) {
            dispatch(authError(error?.response?.data?.message || ERROR_MESSAGE));
        }
    }
}

export function refresh() {
    return async (dispatch) => {
        try {
            const response = await AuthService.refresh();
            const { accessToken, username, avatar_url } = response.data;
            const payload = { username, avatar_url };

            localStorage.setItem("token", accessToken);
            dispatch({ type: LOGIN, payload });
        } catch (error) {
            dispatch(authError(error?.response?.data?.message || ERROR_MESSAGE));
        }
    }
}

export function authError(message) {
    return { type: ERROR, payload: message };
}