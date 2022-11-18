import Vue from 'vue';
import Modal from './index.vue';

// 使用 Vue.extend() 创建 Modal 的构造器
const ModalConstructor = Vue.extend(Modal);

const modal = function(options = {}) {
    // 创建 Modal 实例，通过构造函数传参，
    // 并调用 Vue 实例上的 $mount() 手动挂载
    const ModalInstance = new ModalConstructor(options).$mount();

    // 手动把真实 dom 挂到 html 的 body 上
    document.body.appendChild(ModalInstance.$el);

    return ModalInstance;
};

// 导出包装好的 ToolModal 方法
export default modal;