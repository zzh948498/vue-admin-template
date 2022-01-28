import request from '@/utils/request';
import MD5 from 'react-native-md5';

export function loginApi(data) {
    console.log(MD5.hex_md5('1'));
    return request({
        url: '/mocks/user/login',
        method: 'post',
        data,
    });
}

export function getInfo(token) {
    return request({
        url: '/mocks/user/info',
        method: 'get',
        params: { token },
    });
}

export function logout() {
    return request({
        url: '/mocks/user/logout',
        method: 'post',
    });
}
