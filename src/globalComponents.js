import Vue from 'vue'
const contexts = require.context('@com/global', true, /./)
contexts.keys().filter(item => (/\.vue/).test(item)).forEach(component => {
  const componentEntity = contexts(component).default || contexts(component)
  // 使用内置的组件名称 进行全局组件注册
  Vue.component(componentEntity.name, componentEntity)
})
