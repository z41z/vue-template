<template>
  <main>
    <RouterLink to="/">Home</RouterLink>
    <div>
      <el-button
        type="primary"
        @click="$router.push('/login')"
      >登录</el-button>{{test}}
    </div>
    <RouterLink to="/about">About</RouterLink>
  </main>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['test'])
  },
  mounted() {
    this.setTest(new Date())
  },
  methods: {
    ...mapMutations(['setTest'])
  }
}
</script>
