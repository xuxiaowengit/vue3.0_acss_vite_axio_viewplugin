import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userMock from './src/mock/user';
import loginMock from './src/mock/login';
import roleMock from './src/mock/role';
import articleMock from './src/mock/article';
export function setupProdMockServer() {
  createProdMockServer([...articleMock, ...userMock, ...loginMock, ...roleMock]);
}
