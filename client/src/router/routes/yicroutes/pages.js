export default [
  {
    path: '/home',
    name: 'home',
    component: () => import("@/components/pages/home.vue"),
    meta: {
      layout: "full",
      authReq: true,

    },
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import("@/components/pages/landing.vue"),
    meta: {
      layout: "full",
      authReq: false,

    },
  },
]
