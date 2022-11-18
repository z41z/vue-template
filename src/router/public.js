/**
 * 公共路由
 */
export const PUBLIC_ROUTES = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页'
    },
    component: () => import('@pages/home/index')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@pages/login/index')
  },
  // 404
  {
    path: '*',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('@pages/error/404')
  }
]