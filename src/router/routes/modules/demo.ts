
import type { RouteRecordRaw } from 'vue-router'
const demos:RouteRecordRaw[] = [
    {
        path:'/demo',
        name: 'demo',
        alias:'/',
        component: () => import('/@/views/demo.vue')
    },
    {
        path:'/storeDemo',
        name: 'storeDemo',
        component: () => import('/@/views/storeDemo.vue')
    }
]
export default demos