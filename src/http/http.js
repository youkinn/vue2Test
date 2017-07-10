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

/**
 * 封装一层ajax，方便以后修改替换其它ajax库
 *
 * @param {object} option 配置参数（同axios的api设置）
 * // `url` 请求的接口的地址
 * url: '/user',
 *
 * // `method` 请求类型
 * method: 'get', // 默认get请求
 *
 * // `baseURL` 将自动拼接到`url`前，除非`url`是绝对路径.
 * // 可以设置`baseURL`为axios实例传递相对URL到该实例的方法
 * baseURL: 'https://some-domain.com/api/',
 *
 * // `transformRequest` 允许在将请求数据发送到服务器之前进行更改
 * // 这仅适用于请求方法'PUT'，'POST'和'PATCH'
 * // 数组中的最后一个函数必须返回一个字符串或Buffer的实例ArrayBuffer，
 * // FormData 或 Stream
 * transformRequest: [function (data) {
 *   // 做任何你想要转换的数据
 *   return data;
 * }],
 *
 * // `transformResponse` 允许更改之前做出的响应数据
 * // 将会直接传递给 then/catch
 *transformResponse: [function (data) {
 *  // 做任何你想要转换的数据
 *
 *  return data;
 * }],
 *
 * // `headers` 自定义需要发送的headers
 * headers: {'X-Requested-With': 'XMLHttpRequest'},
 *
 * // `params` 是要与请求一起发送的URL参数，类似'?ID=12345'
 * // 必须是纯object或URLSearchParams对象
 * params: {
 *   ID: 12345
 * },
 *
 * // `paramsSerializer` 是一个可选的函数，负责序列化`params`
 * // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
 * paramsSerializer: function(params) {
 *   return Qs.stringify(params, {arrayFormat: 'brackets'})
 * },
 *
 * // `data` 发送 body 的数据
 * // 仅适用于请求方式 'PUT', 'POST', 'PATCH'
 * // 当没有设置`transformRequest`时，必须是以下类型之一：
 * // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
 * // - 浏览器仅支持 FormData, File, Blob
 * // - Node仅支持: Stream, Buffer
 * data: {
 *   firstName: 'Fred'
 * },
 *
 * // `timeout` 超时时间值，单位毫秒
 * // 如果请求比“timeout”长，请求将被中止。
 * timeout: 1000,
 *
 * // `withCredentials`表示跨站点访问控制是否请求(cookie)
 * // 应该使用凭据
 * withCredentials: false, // 默认false
 *
 * // `adapter` 允许自定义处理请求，使测试更容易。
 * // 返回承诺并提供有效的响应 (see lib/adapters/README.md).
 * adapter: function (config) {
 *   // ...
 * },
 *
 * // `auth` 表示应该使用HTTP Basic auth，并提供凭据。
 * // 这将设置 `Authorization` 头, 覆盖任何现有的
 * // `Authorization` 自定义头你也可以使用 `headers` 来设置.
 * auth: {
 *   username: 'janedoe',
 *   password: 's00pers3cret'
 * },
 *
 * // `responseType` 表示服务器响应的数据类型
 * // 选项是'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * responseType: 'json', // 默认是json
 * // `xsrfCookieName`是用作xsrf令牌值的cookie的名称
 * xsrfCookieName: 'XSRF-TOKEN', // 默认
 * // `xsrfHeaderName` 是携带xsrf令牌值的HTTP头的名称
 * xsrfHeaderName: 'X-XSRF-TOKEN', // 默认
 *
 * // `onUploadProgress` 允许处理上传的进度事件
 * onUploadProgress: function (progressEvent) {
 *   // 用本地进度事件做任何你想要的
 * },
 *
 * // `onDownloadProgress` 允许处理下载的进度事件
 * onDownloadProgress: function (progressEvent) {
 *   // 用本地进度事件做任何你想要的
 * },
 *
 * // `maxContentLength` 定义允许的http响应内容的最大大小
 * maxContentLength: 2000,
 *
 * // `validateStatus` 定义是否解决或拒绝给定的承诺
 * // HTTP响应状态码。如果`validateStatus`返回`true`（或设置为`null` 或`undefined`），承诺将被解决; 否则，承诺将是拒绝
 * validateStatus: function (status) {
 *   return status >= 200 && status < 300; // 默认
 * },
 *
 * // `maxRedirects` 定义node.js中要重定向的最大数量。
 * // 如果设置为0，则不会重定向。
 * maxRedirects: 5, // 默认
 *
 * // “httpAgent”和“httpsAgent”定义执行http时要使用的自定义代理
 * // 和https请求，分别在node.js. 这允许添加类似的选项“keepAlive”，默认情况下未启用。
 * httpAgent: new http.Agent({ keepAlive: true }),
 * httpsAgent: new https.Agent({ keepAlive: true }),
 *
 * // 'proxy' 定义代理服务器的主机名和端口
 * // `auth` 示应该使用HTTP Basic auth连接到代理，
 * // 提供凭证。
 * // 这将设置一个`Proxy-Authorization'头，覆盖任何现有的
 * // 可以使用`header`设置的`Proxy-Authorization'自定义头文件。
 * proxy: {
 *   host: '127.0.0.1',
 *   port: 9000,
 *   auth: {
 *     username: 'mikeymike',
 *     password: 'rapunz3l'
 *   }
 * },
 *
 * // `cancelToken` 指定可以用于取消请求的取消令牌
 * // （详见下面的取消部分）
 * cancelToken: new CancelToken(function (cancel) {
 * })
 * }
 * @returns
 */
function ajax(option) {
  return axios(option);
}

export default ajax;
