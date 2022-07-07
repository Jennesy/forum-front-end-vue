<template>
	<div class="container py-5">
		<Spinner v-if="isLoading" />
		<template v-else>
			<div>
				<h1>{{ restaurant.name }}</h1>
				<span class="badge badge-secondary mt-1 mb-3">
					{{ restaurant.categoryName }}
				</span>
			</div>

			<hr />

			<ul>
				<li>評論數： {{ restaurant.commentsLength }}</li>
				<li>瀏覽次數： {{ restaurant.viewCounts }}</li>
			</ul>
		</template>
		<button type="button" class="btn btn-link" @click="$router.back()">
			回上一頁
		</button>
	</div>
</template>
<script>
import restaurantsAPI from '@/apis/restaurants'
import Spinner from '@/components/Spinner.vue'
import { Toast } from '@/utils/helpers'

export default {
	components: {
		Spinner,
	},
	data() {
		return {
			restaurant: {
				id: -1,
				name: '',
				categoryName: '',
				commentsLength: '',
				viewCounts: '',
			},
			isLoading: true,
		}
	},
	methods: {
		fetchRestaurant: async function (restaurantId) {
			try {
				this.isLoading = true
				const { data } = await restaurantsAPI.getRestaurant({
					restaurantId,
				})
				this.restaurant = {
					name: data.restaurant.name,
					categoryName: data.restaurant.Category.name,
					commentsLength: data.restaurant.Comments.length,
					viewCounts: data.restaurant.viewCounts,
				}
				this.isLoading = false
			} catch (error) {
				this.isLoading = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得餐廳資料，請稍後再試',
				})
			}
		},
	},
	created() {
		this.fetchRestaurant(this.$route.params.id)
	},
	beforeRouteUpdate(to, from, next) {
		this.fetchRestaurant(to.params.id)
		next()
	},
}
</script>
