/**
 * 全局接口API文件
 * 
 */
import $http from "@/utils/request";
import qs from "qs";

// 登录接口
export const login = (data)=>{
    return $http.post('/login', qs.stringify(data)).then(({data})=>{
        return data
    })
}