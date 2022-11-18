<template>
  <div class="pages-404">
    <el-result
      icon="warning"
      title="错误提示"
      subTitle="页面不存在或者未授权的访问"
      style="margin-top:20vh"
    >
      <template slot="extra">
        <el-button
          type="primary"
          size="small"
          @click="$router.go(-1)"
        >返回</el-button>
      </template>
    </el-result>
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