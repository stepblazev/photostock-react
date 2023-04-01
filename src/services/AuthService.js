import axios from 'axios';
import api from '../http/index';

export default class AuthService {
    static async login(username, password) {
        return axios.post(`/login`, { username, password }, { withCredentials: true });
    }

    static async registration(username, password) {
        return axios.post(`/registration`, { username, password }, { withCredentials: true });
    }

    static async refresh() {
        return axios.post(`/refresh`, {}, { withCredentials: true });
    }

    static async logout() {
        return api.post('/logout');
    }
}