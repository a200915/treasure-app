import type { RouteRecordRaw } from 'vue-router'

const modules:any = import.meta.glob('./modules/**/*.ts', {eager: true});
const routes:RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
   let mod = modules[key].default || []
   let list = Array.isArray(mod)? mod : [mod]
   routes.push(...list)
});

routes.push({ 
    path: '/:pathMatch(.*)*', name: 'NotFound', 
    component:  () => import('@/views/notFound.vue')
})

export { routes }