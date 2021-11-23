import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputValue: '0',
    operand: '0',
    currentOperator: 'none'
  },
  mutations: {
    updateInputValue(state, value) {
      state.inputValue = `${value}`;
    },
    updateCurrentOperator(state, value) {
      state.currentOperator = value;
    },
    updateOperand(state, value) {
      state.operand = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
