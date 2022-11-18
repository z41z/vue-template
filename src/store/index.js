/**
 * 状态
 */

import { createStore } from 'vuex'
export default createStore({
  state: {
    test: 'test'
  },
  getters: {
    test: state => state.test,
  },
  mutations: {
    setTest(state, val) {
      state.test = val
    },
  },
  actions: {
  }
})
