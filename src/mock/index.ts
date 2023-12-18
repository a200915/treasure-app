import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import login from './login';


export function setupProdMockServer() {
    createProdMockServer([
        ...login
    ])
}
