import { createProdMockServer } from 'vite-plugin-mock';
import roleMock from '../mock/role';
import userMock from '../mock/user';

export function setupProdMockServer() {
    createProdMockServer([...roleMock, ...userMock]);
}
