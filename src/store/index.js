import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store(
  {
    state,
    actions: {
      // changeCity与dispatch的第一个参数，这个参数（字符串）同名
      changeCity (context, cityName) {
        console.log(context)
        context.commit('changeCity', cityName)
      }
    },
    mutations
  }
)
