import api from '../http/index';

export default class AuthService {
    static async login(username, password) {
        return api.post('/login', { username, password });
    }

    static async registration(username, password) {
        return api.post('/registration', { username, password });
    }

    static async logout() {
        return api.post('/logout');
    }

    static async refresh() {
        return api.post(`/refresh`);
    }
}