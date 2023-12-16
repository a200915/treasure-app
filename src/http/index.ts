import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface ICodeMessage {
  [propName: number]: string
}

const StatusCodeMessage: ICodeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功',
  400: '请求错误(400)',
  401: '未授权，请重新登录(401)',
  403: '拒绝访问(403)',
  404: '请求出错(404)',
  408: '请求超时(408)',
  500: '服务器错误(500)',
  501: '服务未实现(501)',
  502: '网络错误(502)',
  503: '服务不可用(503)',
  504: '网络超时(504)'
}

const http: AxiosInstance = axios.create({
  // baseURL: process.env.VUE_APP_API_PREFIX,
  timeout: 30 * 1000
})

// 请求拦截器
http.interceptors.request.use((config: any) => {
    config.headers = {
      'Content-Type': 'application/json' // 配置请求头
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use((response: AxiosResponse) => {
    const { data } = response
    const { message, success, code } = data
    console.log(message, success, code);
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

const request = <T = unknown>(config: AxiosRequestConfig): Promise<ApiRes<T>> => {
  return new Promise((resolve, reject) => {
    http
    .request<T>(config)
    .then((res: AxiosResponse) => resolve(res.data))
    .catch((err: { message: string }) => reject(err))
  })
}

const get = <T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<ApiRes<T>> => {
  return request({
    method: 'get',
    url,
    params,
    ...config
  })
}

const post = <T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<ApiRes<T>> => {
  return request({
    method: 'post',
    url,
    data: params,
    ...config
  })
}

export { get, post }
