/**
 * 自定义请求工具类
 */
import axios from "axios";

// 自定义的axios配置实例
const instance = axios.create({
    baseURL: 'http://localhost:666',  // 、通用请求地址（后台接口服务器地址）
    timeout: 5000,  // 请求超时的最大时间
});

// axios请求拦截器（暂不用管）
// axios响应拦截器（暂不用管）

// 导出自定义axios模块
export default instance;

