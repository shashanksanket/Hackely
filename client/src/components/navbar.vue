<template>
	<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-nav style="margin-top:5px; margin-left:80px;" href="#"><img class="logo" height="60rm" src="@/assets/perImages/logo.svg"></b-navbar-nav>
    <b-collapse id="nav-collapse" is-nav v-if="$mq === 'largeDevices'">
      <b-navbar-nav class="navMain" style="font-size: larger; margin-left: 5%;">
        <b-nav-item style="margin-left:5%" @click="redirect('hackathons')">
			Hackathons
		</b-nav-item>
        <b-nav-item style="margin-left:5%" @click="redirect('forums')">Forums</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="navMain" style="font-size: larger; margin-right:80px; margin-left: auto; align-self: right;">
        <b-nav-item v-if="!isLoggedIn" style="margin-left:5%" @click="redirect('register')"><b-button style="border-radius: 40px;" variant="primary">Register</b-button></b-nav-item>
        <b-nav-item v-if="!isLoggedIn" style="margin-left:5%" @click="redirect('login')"><b-button style="border-radius: 40px;" variant="primary">LogIn</b-button></b-nav-item>
        <b-nav-item v-if="isLoggedIn" style="margin-top: 3%;">Hi {{ user.firstname }}!!</b-nav-item>
        <b-nav-item v-if="isLoggedIn" style="" @click="logout()"><b-button style="border-radius: 40px;" variant="primary">Logout</b-button></b-nav-item>  
	</b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
	</template>
	  <script>
	  import { ValidationProvider, ValidationObserver } from 'vee-validate'
	  import {
		  BSidebar, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
		  BNavbar, BTooltip, BNavItemDropdown, BDropdownItem, VBToggle,
	  BNavbarToggle,
	  BCollapse, BNavItem,
	  BNavbarBrand,BNav, BNavbarNav,
	  } from 'bootstrap-vue'
	  import { ref } from '@vue/composition-api'
	  import Ripple from 'vue-ripple-directive'
	  import vSelect from 'vue-select'
	  import store from '@/store'
	import Vue from 'vue'
	import VueMq from 'vue-mq'
	import { mapMutations, mapActions, mapState } from "vuex";
	Vue.use(VueMq, {
	  breakpoints: {
		smallDevices: 600,
		mediumDevices: 1200,
		largeDevices: Infinity,
	  }
	})
	  
	  
	  export default {
		  components: {
			  BForm,
			  BFormFile,
			  BFormGroup,
			  BFormInput,
			  BFormInvalidFeedback,
			  BModal,
			  BNavbarBrand,
		BNavbar, BTooltip, BNavItemDropdown, BDropdownItem,
		BNavbarToggle,
		BCollapse,
		BButton,
		BNav,
		BNavItem,
		BNavbarNav,
		BSidebar,
		
	  
			  // Form Validation
			  ValidationProvider,
			  ValidationObserver,
		  },
		  directives: {
		'b-toggle': VBToggle,
		Ripple,
	  },
		  model: {
	  
		  },
		  props: {
	  
	  
		  },
		  data() {
			  return {
				 }
		  },
		  methods: {
		  
		  ...mapActions({
			logOut: "auth/logout"
			}),
			redirect(val){
				this.$router.push('/'+val)
			},
		async logout(){
			await this.logOut()
			this.$router.push('/landing')
			
		}
		  },
		  computed: {
			  ...mapState({
				isLoggedIn: (state) => {
				return state.auth.isAuthenticated
			},
			user: (state) => {
				return state.auth.currUser
			},
	 
	  
			  }),
		  },
		  
	  }
	  
	  </script>
	  <style>
	*{
		font-weight:bolder ;
	}
	.navbar{
		height: 90px;
	/* Primary / Light blue */
	background: #F2F2F2;
	}
	
	</style>