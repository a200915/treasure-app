
import type { RouteRecordRaw } from 'vue-router'
const demos:RouteRecordRaw[] = [
    {
        path:'/demo',
        name: 'demo',
        alias:'/',
        component: () => import('/@/views/demo.vue')
    }
]
export default demos