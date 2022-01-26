import request from '@/utils/request';
import { hex_md5 as hexMd5 } from 'react-native-md5';
export interface LoginApiInput {
    username: string;
    password: string;
}
export function loginApi(data: LoginApiInput) {
    console.log(hexMd5('1'));
    return request({
        url: '/vue-admin-template/user/login',
        method: 'post',
        data,
    });
}

export function getInfo(token: string) {
    return request({
        url: '/vue-admin-template/user/info',
        method: 'get',
        params: { token },
    });
}

export function logout() {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'post',
    });
}
