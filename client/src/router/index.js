import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import yicroutes from './routes/yicroutes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'landing' } },
    ...yicroutes,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach(async (to, _, next) => {
  let isLoggedIn = router.app.$store.getters['auth/isAuthenticated']
  let role = router.app.$store.getters['auth/role']
  if (!isLoggedIn){
    await router.app.$store.dispatch('auth/verifyUser')
    isLoggedIn = router.app.$store.getters['auth/isAuthenticated']
    role = router.app.$store.getters['auth/role']
  }
  if (!to.meta.authReq && !isLoggedIn){
    return next()
  }
  if (!to.meta.authReq && isLoggedIn){
    return next({name:'home'})
  }
  if(!isLoggedIn){
    return next({name:"login"})
  }
  if (isLoggedIn){
    
    return next()
  }
  return next()
})



// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
