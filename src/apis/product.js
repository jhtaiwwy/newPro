
/**
 * 商品接口API文件
 * 
 */
import $http from "@/utils/request";
import qs from "qs";

// 商品图片上传地址
export const uploadUrl =  $http.defaults.baseURL + '/product/upload'
// 服务器文件目录
export const uploadDir =  $http.defaults.baseURL + '/upload/product/'

// 定义了商品列表的接口方法
export const productList = ()=>{
    return $http.get('/product/list').then(({data})=>{
        return data
    })
}

// 定义商品添加的接口方法
export const productAdd = (data)=>{
    return $http.post('/product/add',qs.stringify(data)).then(({data})=>{  // qs.stringify(data) 因为传入的data是vue内定对象，有双向绑定等等功能，ajax请求的参数必须是简单对象。所以，需要把“复杂对象”转换为“简单对象"
        return data
    })
}