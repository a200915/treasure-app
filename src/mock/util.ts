// 成功模版
export const resSuccess = (data: any) => {
    return {
        code: 200,
        data,
        message: '请求成功',
        success: true
    }
}

// 失败模版
export const resError = (data: any, message:string, code=500) => {
    return {
        code,
        data,
        message,
        success: false
    }
}

// 获取随机字符串
export const getToken = () => {
    return Math.random().toString(32).substr(2)
}