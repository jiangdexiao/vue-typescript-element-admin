import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
// modules
import { UserState } from './modules/user'

Vue.use(Vuex)

const store: Store<any> = new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  modules: {
    // 添加自定义模块
    // UserState
  }
})

export default store
