'use strict'

import axios from 'axios'
const pkg = require('../../../package.json')

const state = {
  name: pkg.name,
  langs: null,
  loading: false,
}

const actions = {
  async LANGS({commit}) {
    let {data} = await axios.get('/api/langs?n=30')
    commit('LANGS', data)
  }
}

const mutations = {
  NAME(state, res) {
    state.name = res
  },

  LANGS(state, res) {
    state.langs = res
  },

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
  actions,
  mutations,
  getters,
}
