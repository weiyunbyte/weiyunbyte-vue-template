import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutations/mutation-types'
import home from './modules/home.js'
Vue.use(Vuex)
function getData() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() =>{
        console.log('PromisegetData')
        resolve()
      },6000)
    }
    catch(err) {
      reject(err)
    }
  })
}
function getOtherData() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() =>{
        console.log('PromisegetOtherData')
        resolve()
      },3000)
    }
    catch(err) {
      reject(err)
    }
  })
}
const modulesA = {
  namespaced: true,
  state: {
    name: 'modulesA'
  },
  getters: {
    getnames(state) {
      console.log(state)
      return state.name + 'weiyunbyte'
    }
  }
}
const modulesB = {
  state: {
    name: 'modulesB'
  }
}
export default new Vuex.Store({
  state: {
    // 数据
    count: 0,
    message: '测试信息',
    todos: [
      {id: 1,text: '...',done: true,num: 7},
      {id: 2,text: '...',done: false,num: 9}
    ]
  },
  mutations: {
    // 写方法
    increment(state) {
      state.count++
    },
    incrementTwo(state,payload) {
      state.count += payload.num
    },
    setTosos(state) {
      state.todos[0] = {...state.todos[0],name: 'weiyunbyte'}
    },
    [SOME_MUTATION] (state) {
      state.count++
    },
    actionA(state) {
      console.log('actionA')
    },
    actionB(state) {
      console.log('actionB')
    },
    actionC(state) {
      console.log('actionC')
    },
    actionD(state) {
      console.log('actionD')
    }
  },
  getters: {
    // 获取state数据
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => state.todos.find(todo => todo.id === id)
  },
  actions: {
    // 异步执行mutatuins
    increment({commit}) {
      setTimeout(() =>{
        commit('increment')
      }, 5000)
    },
    incrementTwo({commit}, payload){
      setTimeout(() =>{
        commit('incrementTwo', payload)
      }, 5000)
    },
    // checkout({state, commit, getters}, payload) {

    // }
    actionA({commit}) {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() =>{
            commit('actionA')
            resolve()
          },2000)
        }
        catch(err) {
          reject(err)
        }
        
      })
    },
    actionB({dispatch, commit}) {
      return dispatch('actionA').then(() => {
        commit('actionB')
      })
    },
    async actionC({commit}) {
      commit('actionC', await getData())
    },
    async actionD({dispatch, commit}) {
      await dispatch('actionC')
      commit('actionD', await getOtherData())
    }
  },
  modules: {
    a: modulesA,
    b: modulesB,
    home
  }
})
