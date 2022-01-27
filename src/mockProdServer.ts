// import { createProdMockServer } from 'vite-plugin-mock';
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
// import roleMock from '../mock/role';
import userMock from '../mock/user';

export function setupProdMockServer() {
    createProdMockServer([...userMock]);
}
