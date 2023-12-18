import { useUserStoreWithOut } from "@/store/modules/user"
import { router } from "../index"
// 免登录白名单
const whiteList = ['/login']

function diffRole(routeRole:string[], curRole:string[]) {
    return routeRole.some(item => {
        return curRole.includes(item)
    })
}

router.beforeEach((to,from,next) => {
    let token = sessionStorage.getItem('token')
    // 判断用户是否登录
    if(token) {
        if(to.path === '/login') {
            next('/')
        } else {
            let meta = to.meta
            // 判断角色权限
            if(meta && meta.roles) {
                let userStore = useUserStoreWithOut()
                let role = userStore.role || JSON.parse(sessionStorage.getItem('role') as string)
                if(diffRole(meta.roles, role)) {
                    next()
                } else {
                    next('/NoPermission')
                }
            } else {
                next()
            }
        }
    } else {
        if(whiteList.includes(to.path)) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})