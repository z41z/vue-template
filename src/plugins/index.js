import Modal from './Modal/index.js';

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$Modal = Modal;
}

// 默认导出 install
export default {
  install
};