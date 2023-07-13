import { createStore } from 'vuex'


export default createStore({
  state: {
    count:10,
  },
  getters: {
    getcount(state){
      return state.count > 0? state.count: "count小于0"
    }
  },
  mutations: {
    setCount(state, num){
      state.count += num 
    }
  },
  actions: {

  },
  modules: {
  }
})
