<template>
  <div class="pages-404">
    <van-empty description="页面不存在或者未授权的访问">
      <template slot="extra">
        <van-button
          type="primary"
          size="small"
          @click="$router.go(-1)"
        >返回</van-button>
      </template>
    </van-empty>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  },
  components: {
  },
}
</script>
<style lang="less" scoped>
</style>