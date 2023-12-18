import { post } from "@/http";

// 登录
export const login = (params: {userName:string,passWord:string}) => post('/mock/login', params)