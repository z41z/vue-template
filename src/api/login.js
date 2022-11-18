import {
  USER
} from '@api/url'
import $api from '@utils/axios'

// 获取用户信息
export const getUserInfo = (params) => {
  return $api(
    {
      url: USER.GET_USER_INFO,
      data: params,
      name: '获取用户信息'
    }
  )
}
export const login = (data) => {
  return $api(
    {
      url: `${USER.LOGIN}`,
      method: 'post',
      data,
      name: '用户登录'
    }
  )

}

// 获取用户菜单权限
export const getUserAuthMenu = (params) => {
  return $api(
    {
      url: USER.GET_AUTH_MENU,
      data: params,
      name: '获取用户菜单权限'
    }
  )
}