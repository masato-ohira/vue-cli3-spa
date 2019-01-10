'use strict'

const state = {
  loading: false,
}

const mutations = {
  LOADING(state, res) {
    state.loading = res
  }
}

const getters = {
  config: state => state,
  loading: state => state.loading,
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
}
