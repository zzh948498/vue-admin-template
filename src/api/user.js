import { createMd5 } from '@/utils/crypto';
import request from '@/utils/request';

export function login(data) {
    console.log(createMd5('1'));
    return request({
        url: '/vue-admin-template/user/login',
        method: 'post',
        data,
    });
}

export function getInfo(token) {
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
