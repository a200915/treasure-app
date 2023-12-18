import { resError, resSuccess,getToken } from '../util';

export default [
    {
        url: '/mock/login',
        method: 'post',
        timeout: Math.random()*100 + 300,
        response:( params : any) => {
            // 管理员用户
            if(params.body.userName === 'admin' && params.body.passWord == '123456') {
                return resSuccess({
                    role: ['admin'],
                    token: getToken()
                })
            }
            if(params.body.userName === 'user' && params.body.passWord == '654321') {
                return resSuccess({
                    role: ['user'],
                    token: getToken()
                })
            }

            return resError(null, '用户名或账号密码错误')
        }
    }
]