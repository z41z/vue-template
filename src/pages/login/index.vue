<template>
  <div class="pages-login">
  </div>
</template>
<script>
import { login, getUserAuthMenu, getUserInfo } from "@/api/login.js";
import { setRoutes, FirstRoute } from '@utils/router'
import CONFIG from '@config/config'
export default {
  components: {
  },
  data() {
    return {
    }
  },

  mounted() {
  },
  methods: {
    async login() {
      this.isShowLoading = true;
      await login(dataLogin);
      // 获取菜单权限
      let menuRes = await getUserAuthMenu()
      this.isShowLoading = false
      let menus = menuRes.data || []
      if (Array.isArray(menus) && !menus.length) {
        this.$message.error('当前用户暂无系统访问权限,请联系管理员授权!')
        return
      }
      let userInfoRes = await getUserInfo()
      this.setStorage('U', JSON.stringify(userInfoRes.data))
      this.setStorage('R', JSON.stringify(menuRes.data))
      this.setStorage('C', JSON.stringify(CONFIG))
      setRoutes(this.$router, menuRes.data)
      FirstRoute.getFirstRoute(menuRes.data)
      this.$router.push(FirstRoute.firstRoute)
      window.C = JSON.parse(this.getStorage('C'))
    },
  },
};
</script>
<style lang="less" scoped>
</style>
