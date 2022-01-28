import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import tableMock from '../mock/table';
import userMock from '../mock/user';

export function setupProdMockServer() {
    createProdMockServer([...tableMock, ...userMock]);
}
