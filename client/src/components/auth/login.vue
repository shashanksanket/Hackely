<template>
	<div class="root">
		<div class="logo">
			<img style="margin-left: 5%; margin-top: 4%;" height="60rm" src="@/assets/perImages/logo.svg">
		</div>
		<div class="container root-login">
			<div class="login">
				<h3 class="login-title">Log In</h3>
				<b-button style="width: 100%;" variant="light"><img src="@/assets/perImages/google-icon.svg"> &nbsp; &nbsp;
					Continue with Google</b-button>
				<div class="seperator">
					<h5><span>OR</span></h5>
				</div>
				<b-form @submit="" @reset="" v-if="true">
					<b-form-group label-size="lg" id="input-group-1" label="Email address:" label-for="input-1">
						<b-form-input size="lg" style="border-radius:8px" id="input-1" v-model="form.email" type="email" placeholder="Enter email"
							required></b-form-input>
					</b-form-group>

					<b-form-group label-size="lg" id="input-group-2" label="Your Password:" label-for="input-2">
						<b-form-input size="lg" style="height: 49px; border-radius:8px" id="input-2" v-model="form.password" type="password" placeholder="Enter Password"
							required></b-form-input>
					</b-form-group>
					<br>
					<b-button style="width:100%;" type="submit" @click.prevent="login()" variant="light">Submit</b-button>
				</b-form>
				<br>
				<span class="span-register">Doesn’t have an Account? <span style="color:#1B419B; cursor: pointer; " @click.prevent="redirect('/register')">Register Now</span></span>
				<br>
				<span style="margin-top: 10%;" class="copyright-text">@2023 Hackely,Inc. All rights reserved. Terms - Privacy</span>
			</div>
			<div class="login-image">
				<img style="margin-left: 25%; width:80%" src="@/assets/perImages/frame-3.svg">
			</div>
		</div>
	</div>
</template>
<script>
import { BModal, VBModal, BAlert, BCardText } from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code";
import Ripple from "vue-ripple-directive";
import { mapMutations, mapActions, mapState } from "vuex";
import Navbar from "../navbar.vue"
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
import { password } from "@/@core/utils/validations/validations";

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
			form:{

				email:'',
				password: '',
			}
		};
	},
	methods: {
		...mapActions({
			loginUser: "auth/loginUser"
		}),
		async redirect(){
			this.$router.push('/register')
		},
		async login(){
			await this.loginUser(this.form)
			this.$router.push("/home")
		},
		goToStep: function(step) {
            this.currentStep = step;
        },
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

.login {
	margin: 5%;
	width: 30%;

}
.copyright-text{
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
.root-login{
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

.login-title {
	margin-bottom: 10%;

	width: 97px;
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
.span-register{
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
}
</style>