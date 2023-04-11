import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt from 'jsonwebtoken'

function verifyToken(token) {
	try {
	  const decoded = jwt.verify(token, 'secret') // replace 'secret' with your JWT secret key
	  return decoded
	} catch (error) {
	  console.log('JWT verification failed:', error.message)
	  return null
	}
  }


Vue.use(Vuex);

export default {
	namespaced: true,
	state: {
		isAuthenticated: false,
		currUser:{},
		registerSuccess: ''
	},
	getters: {
		isAuthenticated: state => state.isAuthenticated,
		role: state => state.currUser.role,
	},
	mutations: {},
	
	actions: {
		loginUser: async ({ commit,state }, payload) => {
			const res = await axios.post("http://localhost:4000/api/auth/login",{
				payload
			})
			// state.role = res.data.user.role
			const token = res.data.accessToken
			localStorage.setItem('access_token',token)
			state.isAuthenticated = true 
			state.currUser = res.data.user
			console.log(res)
		},
		verifyUser: async ({commit,state}) => {
			const secret="mySecretKey"
			const token = localStorage.getItem('access_token')
			if(token){
				try {
					const decoded = jwt.verify(token,secret)
					if(decoded){
						state.isAuthenticated = true
						state.currUser = decoded.user
					}
					return decoded
				  } catch (error) {
					console.log('JWT verification failed:', error.message)
					return null
				  }

			}
			else{
				console.log('JWT Token failed')
					return null
			}
		},
		registerUser: async ({ commit,state }, payload) => {
			try{
				const res = await axios.post("http://localhost:4000/api/auth/studentRegister",{
					payload
				})
				state.registerSuccess = true

			}catch(e){
				console.log(e)
			}
		},
		logout: async ( {commit,state}, payload ) =>{
			localStorage.removeItem("access_token")
			state.isAuthenticated = false
			state.currUser = {}
		}
		
	},
}
