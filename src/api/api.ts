import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6fc83ead-7a8f-46b1-893b-8465afa55caf"
    }
});

export const usersAPI = {
    getUsers( currentPage: number, pageSize: number ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    AuthMe() {
        return instance.get('auth/me')
    },
    follow( id: number ) {
        return instance.post(`follow/${id}`)
    },
    unFollow( id: number ) {
        return instance.delete(`follow/${id}`)
    }
}



