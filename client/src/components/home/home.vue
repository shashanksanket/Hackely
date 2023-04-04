
<template style="">
	<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { BModal, VBModal, BAlert, BCardText } from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code";
import Ripple from "vue-ripple-directive";
import Navbar from "./navbar.vue"
import Footer from "./footer.vue"
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
		Footer,
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
}


</script>
<style lang="scss">

</style>
	