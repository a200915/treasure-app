import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import demo from './demo';


export function setupProdMockServer() {
    createProdMockServer([
        ...demo
    ])
}
