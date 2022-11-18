<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { setRoutes, FirstRoute } from '@utils/router'
export default {
  data() {
    return {
    }
  },
  created() {
    // 页面刷新设置路由
    let routes = []
    if (localStorage.R) {
      routes = JSON.parse(this.getStorage('R'))
    }
    setRoutes(this.$router, routes)
    if (this.$route.path === '/') {
      if (localStorage.R) {
        FirstRoute.getFirstRoute(routes)
        this.$router.push(FirstRoute.firstRoute)
        return
      }
      this.$router.push('/login')
    }
  },
  mounted() {
    if (!localStorage.access_token) {
      this.$router.push('/login')
    }
    if (localStorage.C) {
      window.C = JSON.parse(this.getStorage('C'))
    }
  },
  destroyed() {
  },
  methods: {
  },
}
</script>

<style lang="less">
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
html,
body,
h1 {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft Yahei';
}
#app {
  width: 100%;
  height: 100%;
}
</style>