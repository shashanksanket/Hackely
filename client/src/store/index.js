import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import verticalMenu from './vertical-menu'
import appConfig from './app-config'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    portfolio,
    verticalMenu,
    appConfig,
    app
    
  },
  //plugins: [...servicePlugins],
  //FIXME: We need to use persistent storage
  // currently on page refresh, store is getting reset
  strict: process.env.DEV,
})
