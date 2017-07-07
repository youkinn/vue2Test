import axios from 'axios';
import { RUNNING_URL } from '../config';

// 允许设置cookies
axios.defaults.withCredentials = true;

// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
axios.defaults.baseURL = RUNNING_URL;

export default axios;
