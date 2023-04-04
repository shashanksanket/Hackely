export default [

  {
    path:'/login',
    name:'login',
    component: () => import("@/components/auth/login"),
    meta: {
      layout: "full",
      
    },
  },
  {
    path:'/register',
    name:'register',
    component: () => import("@/components/auth/register.vue"),
    meta: {
      layout: "full",
      
    },
  },
]
