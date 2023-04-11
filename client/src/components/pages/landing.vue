<template>
	<div class="root">
		<Navbar />
		<br /><br />
		<div class="root1 container">
			<div class="heading">
				<h1>
					Revolutionize your skills with the best hackathons worldwide!
				</h1>
				<br>
				<br>
				<p>
					Join the most innovative community of students and professionals worldwide.
				</p>
				<br><br>
				<b-button variant="light">Join Now &nbsp; &nbsp; &nbsp;<img src="../../assets/perImages/vector-dark.svg"></b-button>
			</div>
		</div>
		<div class="root2 container">
			<div class="sub1 container">

				<div class="subImage1" style="margin-left: 5%;">
					<img src="../../assets/perImages/frame-1.svg">
				</div>
				<div class="subText1" style=" width: 412px; height: 21px;margin-top: 4%; margin-left: 15%;">
					<h1
						style="font-family: 'Work Sans'; font-style: normal; font-weight: 1000; color: #232323; font-size: 32px; line-height: 110%;">
						Participate in Hackathons</h1>
					<span>
						<p style="width: 516px; height: 44px; font-family: 'Nunito Sans'; font-style: normal; font-weight: 600; font-size: 16px; line-height: 22px;

	color: #232323;">
							<br>

							Browse through our list of upcoming hackathons and register for the one that suits your interest
							and skills.
						</p>
						<br>
					</span>
					<br>
					<b-button style="border-radius: 24px;" variant="dark">Browse &nbsp; &nbsp; &nbsp;<img
							src="../../assets/perImages/vector.svg"></b-button>
				</div>
			</div>
			<div class="sub1 container">

				<div class="subText1" style=" margin-left: 5%; width: 412px; height: 21px;margin-top: 4%;">
					<h1
					style="font-family: 'Work Sans'; font-style: normal; font-weight: 1000; color: #232323; font-size: 32px; line-height: 110%;">
					Host a hackathon</h1>
					<span>
						<p style="width: 516px; height: 44px; font-family: 'Nunito Sans'; font-style: normal; font-weight: 600; font-size: 16px; line-height: 22px;

color: #232323;">
			<br>
			
			If you are a company looking to host a hackathon, our platform provides an easy and efficient way to organize and manage it.
		</p>
		<br>
	</span>
	<br>
	<b-button style="border-radius: 24px;" variant="dark">Host Now &nbsp; &nbsp; &nbsp;<img
		src="../../assets/perImages/vector.svg"></b-button>
	</div>
	<div class="subImage1" style="margin-left:23%">
		<img src="../../assets/perImages/frame-1.svg">
	</div>
			</div>
			<div class="sub1 container">

<div class="subImage1" style="margin-left: 5%;">
	<img src="../../assets/perImages/frame-1.svg">
</div>
<div class="subText1" style=" width: 412px; height: 21px;margin-top: 4%; margin-left: 15%;">
	<h1
		style="font-family: 'Work Sans'; font-style: normal; font-weight: 1000; color: #232323; font-size: 32px; line-height: 110%;">
		Resources</h1>
	<span>
		<p style="width: 516px; height: 44px; font-family: 'Nunito Sans'; font-style: normal; font-weight: 600; font-size: 16px; line-height: 22px;

color: #232323;">
			<br>

			Get access to valuable resources such as hackathon guides, tutorials, and mentorship to help you prepare for your hackathon.
		</p>
		<br>
	</span>
	<br>
	<b-button style="border-radius: 24px;" variant="dark">Explore &nbsp; &nbsp; &nbsp;<img
			src="../../assets/perImages/vector.svg"></b-button>
</div>
			</div>
			<div class="sub1 container">

<div class="subText1" style=" margin-left: 5%; width: 412px; height: 21px;margin-top: 4%;">
	<h1
	style="font-family: 'Work Sans'; font-style: normal; font-weight: 1000; color: #232323; font-size: 32px; line-height: 110%;">
	Community</h1>
	<span>
		<p style="width: 516px; height: 44px; font-family: 'Nunito Sans'; font-style: normal; font-weight: 600; font-size: 16px; line-height: 22px;

color: #232323;">
<br>

Connect with like-minded individuals, form teams, and collaborate with others to enhance your hackathon experience.
</p>
<br>
</span>
<br>
<b-button style="border-radius: 24px;" variant="dark">Browse &nbsp; &nbsp; &nbsp;<img
src="../../assets/perImages/vector.svg"></b-button>
</div>
<div class="subImage1" style="margin-left:23% ;">
<img style="border-radius:7%;" src="../../assets/perImages/frame-2.svg">
</div>
			</div>

		</div>
	</div>
</template>
<script>
import { BModal, VBModal, BAlert, BCardText } from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code";
import Ripple from "vue-ripple-directive";
import Navbar from "../navbar.vue"
// import Footer from "../footer.vue"
import Progress from "easy-circular-progress";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapMutations, mapActions, mapState } from "vuex";
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
		// Footer,
		Progress,
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
			name: "",
			tagline: "",
			description: "",
			callToAction: "",
			value: {
				type: Number,
				required: true,
			},
			max: {
				type: Number,
				default: 100,
			},
			slides: [
				{
					caption: "First slide",
					text: "This is the first slide",
					imgSrc: "https://via.placeholder.com/1000x200",
					alt: "First slide",
				},
				{
					caption: "Second slide",
					text: "This is the second slide",
					imgSrc: "https://via.placeholder.com/1000x200",
					alt: "Second slide",
				},
				{
					caption: "Third slide",
					text: "This is the third slide",
					imgSrc: "https://via.placeholder.com/1000x200",
					alt: "Third slide",
				},
			],
		};
	},
	methods: {

	},
	mounted() {

	},
};
</script>
<style scoped>
*{
	font-family: 'Work Sans' !important; 
	font-style: normal !important; 
	font-weight: 1000 !important;
}
.root1 {
	background-image: url("../../assets/perImages/slice-1.svg");
	height: 456px;
	border-radius: 20px;
	width: 1400px;
}
.heading{
	display:inline-block ;
	margin-top: 100px;
	margin-left: 3%;
}
.heading h1{
	width: 53%;
height: auto;
font-family: 'Work Sans' !important;
font-style: normal !important;
font-weight: 900 !important;
font-size: 48px !important;
line-height: 110% !important;
display: inline-block;
color: #F1F1F1;
flex: none;
order: 0;
flex-grow: 0;
}
.heading p{
	width: 529px;
height: 66px;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;

color: #EEEEEE;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.sub1 {
	margin-top: 5%;
	display: flex;
	flex-direction: row;
}</style>