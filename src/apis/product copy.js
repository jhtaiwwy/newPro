import axios from "axios";

const IP = 'http://localhost:666';

// 定义了商品列表的接口方法
export const productList = ()=>{
    return axios.get(IP+'/product/list').then((response)=>{
        debugger
        return response.data
    })
}
// 定义了商品列表的接口方法
// export const productAdd = (data)=>{
//     return axios.post(IP+'/product/add',data).then((response)=>{
//         debugger
//         response
//     })
// }