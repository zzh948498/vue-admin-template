import request from '@/utils/request';
import MD5 from 'react-native-md5';

export function login(data) {
    console.log(MD5.hex_md5('1'));
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
