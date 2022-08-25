<template>
	<div id="restaurant-forum">
		<Navbar />
		<div
			:class="[
				'background-image',
				{ opacity: this.$store.state.isAuthenticated },
			]"
		></div>
		<main role="main" class="mt-5">
			<router-view />
		</main>
	</div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue'

export default {
	name: 'App',
	components: { Navbar },
}
</script>

<style scoped>
main {
	margin-top: 65px !important;
}
.background-image {
	display: block;
	position: fixed;
	z-index: -999;
	inset: 0;
	background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	isolation: isolate;
}
.opacity {
	opacity: 0.2;
}
</style>
