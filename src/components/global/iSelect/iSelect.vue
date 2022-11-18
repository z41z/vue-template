<!--
 * @Description: 
 * @Author: XD
 * @Date: 2022-05-09 11:44:07
 * @LastEditTime: 2022-05-09 13:39:01
 * @LastEditors: XD
-->
<!--  -->
<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    placeholder="请选择"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "iSelect",
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  created() {
  },
  data() {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style lang='less' scoped>
</style>