import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputValue: '0'
  },
  mutations: {
    updateInputValue(state, value) {
      state.inputValue = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
