import axios from 'axios';
import { RUNNING_URL } from '../config';

// 允许设置cookies
axios.defaults.withCredentials = true;

// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
axios.defaults.baseURL = RUNNING_URL;

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (typeof response.data === 'string') {
      try {
        response.data = JSON.parse(response.data);
      } catch (e) {
        response.data = {
          code: 10001,
          msg: '接口错误',
        };
      }
    }

    let err = true;

    switch (Number(response.data.code)) {
      case 10001: // 接口错误
        // TODO 接口错误处理方法
        break;
      case 20000: // 未登录
        // TODO 未登陆处理方法
        break;
      case 20001: // 登陆失效处理
        // TODO 登陆失效处理方法
        break;
      default:
        err = false;
        break;
    }
    if (err) {
      return Promise.reject(false);
    }
    return response;
  },
  (error) => {
    // TODO 非正常错误码处理
    if (error.response) {
      // 其它返回code时的处理
    } else {
      // Something happened in setting up the request that triggered an Error
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default axios;
