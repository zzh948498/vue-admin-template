import request from '@/utils/request';

export function getList(params) {
    return request({
        url: '/mocks/table/list',
        method: 'get',
        params
    });
}
