/**
 * 路由
 */
/**
 * 路由递归设置动态路由
 * @param {Object} router 路由实例
 * @param {Array} routes 路由
 */
const _setRoutes = (router, routes) => {
  routes.forEach(route => {
    let {
      path,
      name,
      path: component,
      name: title
    } = route
    router.addRoute([{
      path,
      name,
      meta: {
        title
      },
      component: () => import(`../pages${component}.vue`)
    }])
    if (route.children && route.children.length) {
      route.children.forEach(item => {
        item.path = `${route.path}${item.path}`
      })
      _setRoutes(router, route.children)
    }
  })
}

/**
 * 设置路由
 * @param {Object} router router实例
 * @param {Array} routes 路由
 */
export const setRoutes = (router, routes) => {
  _setRoutes(router, routes)
}

export const FirstRoute = {
  firstRoute: '',
  getFirstRoute(routes) {
    if (Array.isArray(routes) && routes.length) {
      FirstRoute.firstRoute = routes[0].path
      if (routes[0].children) {
        FirstRoute.getFirstRoute(routes[0].children)
      }
    }
  }
}