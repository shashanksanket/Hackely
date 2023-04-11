export default [
	{
	  path: '/login',
	  name: 'login',
	  component: () => import("@/components/auth/login.vue"),
	  meta: {
		layout: "full",
		authReq: false,
	  },
	},
	{
		path: '/register',
		name: 'register',
		component: () => import("@/components/auth/register.vue"),
		meta: {
		  layout: "full",
		  authReq: false,
		},
	  },
  ]