const state = {
	loading: true
}
const mutations = {
  setLoadStatus(state,payload) {
    state.loading = payload.status
  }
}
const actions = {
  async getglomessage({state,commit,rootState}, payload) {
    // return new Promise((resolve, reject) =>{
    //   try {
    //     commit('setname', payload)
    //     resolve()
    //   } catch (err){
    //     reject(err)
    //   }
    // })
    await commit('setname', payload)
  }
}
export default {
	namespaced: true,
	state,
	getters,
  mutations,
  actions
}