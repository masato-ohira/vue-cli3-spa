import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from 'vuex/dist/logger'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createLogger(),
  ],
})

window.$store = store

export default store
