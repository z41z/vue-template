/**
 * 请求
 */
import { Toast } from 'vant';
import axios from 'axios';
// 创建axios实例
const $api = axios.create({
  timeout: 10000 // 请求超时时间
});
import router from '@router'
/**
 * axios主要配置项config,和axios默认一致,新增options和mockData项
 * 接口返回格式{code: 200, msg: '接口返回值'}
 * @param {Object} 配置
 * @param {String} config.method 请求方式
 * @param {String} config.url 请求地址
 * @param {*} config.mockData 模拟数据
 * @param {Object} config.options 请求配置
 * @param {Object} config.options 请求配置
 * @param {*} config.options.data 请求数据
 * @param {String} config.options.search 请求url字符串search参数
 * @param {String} config.options.name 请求名称
 */
// request拦截器
$api.interceptors.request.use(config => {
  // 请求进度
  let {
    method = 'get',
    data = {}
  } = config
  let methodRegx = /post|put|patch/ig;
  let paramsName = methodRegx.test(method.toLowerCase()) ? 'data' : 'params';
  config[paramsName] = data;
  if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  }
  if (localStorage.access_token) {
    config.headers['Authorization'] = `Bearer ${localStorage.access_token}`;
  }
  return config;
}, error => {
  console.log(error)
  Promise.reject(error);
})

// respone拦截器
$api.interceptors.response.use(
  response => {
    const res = response.data;
    let isSuccess = res.isSuccess
    if (!isSuccess) {
      Toast({ type: 'error', message: res })
      return Promise.reject({
        isSuccess: false,
        data: res
      });
    } else {
      let { mockData, name } = response.config
      if (mockData === undefined) {
        return {
          isSuccess: true,
          data: response.data
        }
      }
      else {
        console.log(`${name}已模拟数据:`, mockData)
        return {
          isSuccess: true,
          data: mockData
        }
      }
    }
  },
  error => {
    let ERROR_CODE = {
      ECONNABORTED: '请求断开',
      ERR_NETWORK: '请求错误',
      ERR_BAD_REQUEST: '请求错误'
    }
    let message = ERROR_CODE[error.code] || error.response.data.msg
    let config = error.config
    let { url = '', method = 'get', headers = {}, name = '', mockData } = config;
    let data = config.data || config.params;
    let href = location.href;
    if (message === '未登录') {
      router.push({ path: '/login' })
    } else {
      Toast({ type: 'error', message })
    }

    if (mockData === undefined) {
      console.log(`💔😭😱💔😭😱💔\n⚡name:${name}\n🎫message:${message}\n🌈href:${href}\n🌈url:${url}\n💬data:${JSON.stringify(data)}\n🐱‍👤method:${method}\n🤔headers:${JSON.stringify(headers)}`);
      return Promise.reject({
        isSuccess: false,
        message
      });
    }
    else {
      console.log(`${name}已模拟数据:`, mockData)
      return {
        isSuccess: true,
        message: '模拟数据',
        data: mockData
      }
    }
  }
);

export default $api;