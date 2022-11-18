/**
 * 接口URL地址
 */

const API_ROOT = '/api';
// 权限及登录接口
export const USER = {
  //登录
  LOGIN: API_ROOT + '/login',
  //获取用户信息
  GET_USER_INFO: API_ROOT + '/user/info',
  // 获取用户菜单权限
  GET_AUTH_MENU: API_ROOT + '/user/menu'
}