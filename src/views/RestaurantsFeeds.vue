<template>
	<div class="container py-5">
		<NavTabs />
		<h1 class="mt-5">最新動態</h1>
		<hr />
		<Spinner v-if="isLoading" />
		<div class="row" v-else>
			<div class="col-md-6">
				<h3>最新餐廳</h3>
				<!-- 最新餐廳 NewestRestaurants -->
				<NewestRestaurants v-bind:restaurants="restaurants" />
			</div>
			<div class="col-md-6">
				<!-- 最新評論 NewestComments-->
				<h3>最新評論</h3>
				<NewestComments v-bind:comments="comments" />
			</div>
		</div>
	</div>
</template>
<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import restaurantsAPI from '@/apis/restaurants'
import Spinner from '@/components/Spinner.vue'
import { Toast } from '@/utils/helpers'

export default {
	name: 'RestaurantsFeeds',
	components: {
		NavTabs,
		NewestRestaurants,
		NewestComments,
		Spinner,
	},
	data() {
		return {
			restaurants: [],
			comments: [],
			isLoading: true,
		}
	},
	created() {
		this.fetchFeeds()
	},
	methods: {
		async fetchFeeds() {
			try {
				this.isLoading = true
				const response = await restaurantsAPI.getFeeds()
				this.restaurants = response.data.restaurants
				this.comments = response.data.comments.filter(
					(comment) => comment.RestaurantId
				)
				this.isLoading = false
			} catch (error) {
				this.isLoading = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得最新動態資料，請稍後再試',
				})
			}
		},
	},
}
</script>
