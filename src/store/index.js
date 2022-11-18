/**
 * 状态
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: ''
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
