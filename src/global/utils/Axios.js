import axios from 'axios';
import { message } from 'ant-design-vue';

// 创建axios实例
// const axiosInatance = axios.create({
//     baseURL: 'http://127.0.0.1:8000/', // api的base URL
//     timeout: 5000, // 设置请求超时时间
//     responseType: 'json',
//     withCredentials: true, // 是否允许带cookie这些
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         'x-token': '777',
//     },
// });
// 创建axios实例并设置请求拦截器，以在每个请求中添加token
const API = axios.create({}



);
API.interceptors.request.use(
    config => {

    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    if(config.url === '/api/media/files/'){
        config.headers["Content-Type"]="multipart/form-data";
    }else{
        config.headers["Content-Type"]="application/json";
    }
    return config;
    },
    error => {
        // 请求错误处理
        console.log('全局axios',error)
        return Promise.reject(error);
    }
);
// 添加响应拦截器
API.interceptors.response.use(
    response => {
        // 请求成功的情况直接返回response
        return response;
    },
    error => {
        // 这里处理HTTP请求错误
        if (error.response) {
            // 根据HTTP响应状态码做不同处理
            switch (error.response.status) {
                case 403:
                    // 处理403错误

                    message.error('您暂时没有权限进行该操作,请联系管理员添加权限!')
                    break;
                case 401:
                    // 处理401错误
                    message.error('认证失败!请登录后再操作,或联系管理员!')
                    break;
                case 404:
                    // 处理404错误
                    message.error('访问数据的路径错误!')
                    break;
                default:
                    // 其他错误
                    message.error('系统异常,请稍后再试!')
            }
        } else if (error.request) {
            // 请求已发出，但没有收到响应
            console.error('Request Error', error.request);
        } else {
            // 其他错误
            console.error('Error', error.message);
        }
        return Promise.reject(error);
    }
);



export default API;
