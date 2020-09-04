const state = {
	name: 'modules_home'
}
const getters = {
	getname(state) {
    console.log(state)
		return state.name + '任伟'
	}
}
const mutations = {
  setname(state,payload) {
    state.name = '修改后的state'+payload.text
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