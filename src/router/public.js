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
    component: () => import('@pages/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@pages/login/index.vue')
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('@pages/error/404.vue')
  }
]