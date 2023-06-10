<template>
	<div class="root">
		<div class="logo">
			<img style="margin-left: 5%; margin-top: 4%;" height="60rm" src="@/assets/perImages/logo.svg">
			<!-- <b-button @click.prevent="redirect('/landing')" style="margin-top:3%; margin-left:29%" variant="secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>  Go Back</b-button> -->
		</div>
		<div class="container root-register">
			<div class="register">
				<b-form @submit="" @reset="" v-if="true">
					<span variant="danger" v-if="this.errors">{{ this.errors }}</span>
					<div id="step1" v-if="(currentStep == 1)">
						<h3 class="register-title">Student Register</h3>
						<b-button style="width: 100%;" variant="light"><img src="@/assets/perImages/google-icon.svg"> &nbsp; &nbsp;
							Continue with Google</b-button>
						<div class="seperator">
							<h5><span>OR</span></h5>
						</div>
						<div class="form-title">
							<h2>What would you like us to call?</h2>
							<br>
							<p class="form-text">Set personal details to create your account.</p>
						</div>
						<b-form-group label-size="lg" id="input-group-1" label="First Name" label-for="input-1">
							<b-form-input size="lg" style="border-radius:8px" id="input-1" v-model="form.firstname" type="text"
								placeholder="Enter First Name" required></b-form-input>
						</b-form-group>

						<b-form-group label-size="lg" id="input-group-2" label="Last Name" label-for="input-2">
							<b-form-input size="lg" style="height: 49px; border-radius:8px" id="input-2" v-model="form.lastname"
							type="text" placeholder="Enter Last Name" required></b-form-input>
						</b-form-group>
						<br>
						<b-button style="width:100%; border-radius: 10px;"  @click.prevent="goToStep(2)"
						variant="dark">Next</b-button>
						<br><br>
				<span class="span-register">Already have an Account? <span style="color:#1B419B; cursor: pointer;" @click.prevent="redirect('/login')">Login Now</span></span>
				<br>
					</div>
					<div id="step2" v-if="(currentStep == 2)">
						<div class="form-title">
							<h2>Add your number and birthday</h2>
							<br>
							<p class="form-text">It’s almost done! Set personal details to create your account.</p>
						</div>
						<b-form-group label-size="lg" id="input-group-1" label="Mobile Number:" label-for="input-1">
							<b-form-input size="lg" style="border-radius:8px" id="input-1" v-model="form.phoneno" type="number"
								placeholder="Enter Mobile Number" required></b-form-input>
						</b-form-group>
						<b-form-group label-size="lg" id="input-group-2" label="Date of Birth:" label-for="input-2">
							<b-form-input size="lg" style="height: 49px; border-radius:8px" id="input-2" v-model="form.dob"
								type="date" placeholder="Enter your Date of Birth" required></b-form-input>
						</b-form-group>
						<br>
						<b-button style="width:40%; margin-right:20%;"  @click.prevent="goToStep(1)"
						variant="outline-dark">Back</b-button>
						<b-button style="width:40% ;"  @click.prevent="goToStep(3)"
							variant="dark">Next</b-button>
						</div>
					<div id="step3" v-if="(currentStep == 3)">
						<div class="form-title">
							<h2>Add your email and password</h2>
							<br>
							<p class="form-text">Last Step! Set personal details to create your account.</p>
						</div>
						<b-form-group label-size="lg" id="input-group-1" label="Email address:" label-for="input-1">
							<b-form-input size="lg" style="border-radius:8px" id="input-1" v-model="form.email" type="email"
								placeholder="Enter email" required></b-form-input>
						</b-form-group>

						<b-form-group label-size="lg" id="input-group-2" label="Your Password:" label-for="input-2">
							<b-form-input size="lg" style="height: 49px; border-radius:8px" id="input-2" v-model="form.password"
								type="password" placeholder="Enter your Password" required></b-form-input>
						</b-form-group>
						<b-form-group label-size="lg" id="input-group-2" label="Confirm Password:" label-for="input-2">
							<b-form-input size="lg" style="height: 49px; border-radius:8px" id="input-2" v-model="cnfpassword"
								type="password" placeholder="Confirm your Password" required></b-form-input>
						</b-form-group>
						<br>
						<b-button style="width:40%;  margin-right:20%;"  @click.prevent="goToStep(2)"
							variant="outline-dark">Back</b-button>
							
						<b-button style="width:40%;" @click.prevent="register('/register')"
							variant="dark">Create Account</b-button>
					</div>
				</b-form>
				
				<span style="margin-top: 10%;" class="copyright-text">@2023 Hackely,Inc. All rights reserved. Terms -
					Privacy</span>
			</div>
			
			<div class="slider">
				<template>
					<div>
						<b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators
							 img-width="80%" style=" margin-left: 25%;"
							@sliding-start="onSlideStart" @sliding-end="onSlideEnd">
							
							<b-carousel-slide  img-src="@/assets/perImages/slide.png"></b-carousel-slide>
							<b-carousel-slide  img-src="@/assets/perImages/slide.png"></b-carousel-slide>
							<b-carousel-slide  img-src="@/assets/perImages/slide.png"></b-carousel-slide>
							<b-carousel-slide  img-src="@/assets/perImages/slide.png"></b-carousel-slide>
						</b-carousel>
					</div>
				</template>


				<!-- <img style="margin-left: 25%; width:80%" src="@/assets/perImages/frame-3.svg"> -->
			</div>
		</div>
	</div>
</template>
<script>
import { BModal, VBModal, BAlert, BCardText } from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code";
import Ripple from "vue-ripple-directive";
import Navbar from "../navbar.vue"
import Vue from 'vue'
import { mapMutations, mapActions, mapState } from "vuex";

import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
	BRow,
	BCol,
	BLink,
	BButton,
	BForm,
	BFormCheckbox,
	BFormGroup,
	BFormInput,
	BCarouselSlide,
	BFormSelect,
	BCarousel,
	BInputGroup,
	BInputGroupAppend,
	BProgress,
	BImg,
	BCardTitle,
} from "bootstrap-vue";

Vue.component('step3', {
	div: '#step3',
	props: [
		'currentStep',
		'step1',
		'step2'
	]
});
Vue.component('step2', {
	div: '#step2',
	props: [
		'currentStep',
		'step2'
	]
});
Vue.component('step1', {
	div: '#step1',
	props: [
		'currentStep',
		'step1'
	]
});




export default {
	components: {
		BCardCode,
		BProgress,
		BButton,
		BModal,
		BAlert,
		BCarousel,
		BCarouselSlide,
		BRow,
		BImg,
		BCol,
		BLink,
		BForm,
		BCardText,
		BCardTitle,
		BFormCheckbox,
		BFormGroup,
		BFormInput,
		BFormSelect,
		BInputGroup,
		BInputGroupAppend,
		ValidationProvider,
		ValidationObserver,
		Navbar,
	},
	directives: {
		Ripple,
	},
	data() {
		return {
			slide: 0,
			sliding: null,
			form:{

				firstname: '',
				lastname: '',
				email: '',
				password: '',
				phoneno: '',
				dob: '',
				errors: '',
			},
			cnfpassword: '',
			currentStep: 1,

		};
	},
	computed: {
			  ...mapState({
				registerSuccess: (state) => {
				return state.auth.registerSuccess
			},
	 
	  
			  }),
		  },
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		},
		...mapActions({
			registerUser: "auth/registerUser"
		}),
		async redirect(val){
			this.$router.push(val)
		},
		async register() {
			try{
				if (this.cnfpassword==this.form.password){
					await this.registerUser(this.form)
				}else{
					throw "Password not same"
				}
			}catch(e){
				this.errors = e
			}
			if (this.registerSuccess){
				this.$router.push('/login')
			}
		},
		goToStep(val){
			this.currentStep = val

		}
	},
	mounted() {

	},
};
</script>
<style scoped>
* {
	font-family: 'Work Sans' !important;
	font-style: normal !important;
	font-weight: 1000 !important;
}

.register {
	margin: 5%;
	width: 40%;

}
.form-title h2{
width: 434px;
height: 20px;
font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 35px;
letter-spacing: 0.2px;
color: #333333;
flex: none;
order: 0;
flex-grow: 0;
}
.form-text{
width: 434px;
height: 20px;
font-family: 'Mulish';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.2px;
color: #4F4F4F;
flex: none;
order: 1;
flex-grow: 0;
}
.slider{
	width: 50%;
}
.copyright-text {
	position: absolute;
	width: 354px;
	height: 19px;

	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;


	color: #717171;
}

.root-register {
	display: flex;
	flex-direction: row;
}

.seperator h5 {
	margin-top: 2%;
	/* width: 30%; */
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1em;
}

.seperator h5::before,
.seperator h5::after {
	content: "";
	display: block;
	flex-grow: 1;
	height: 1px;
	background: #ccc;
}

.seperator h5 span {
	padding: 0 2em;
}

.register-title {
	margin-bottom: 10%;

	width: 100%;
	height: 23px;

	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 900;
	font-size: 32px;
	line-height: 110%;


	color: #232323;




	flex: none;
	order: 0;
	flex-grow: 0;
}

.span-register {
	width: 293px;
	height: 22px;
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	text-align: right;
	/* letter-spacing: 0.0875px; */
	color: #4F4F4F;
	flex: none;
	order: 3;
	flex-grow: 0;
}</style>