<template>
	<div class="container py-5">
		<Spinner v-if="isLoading" />
		<div class="row" v-else>
			<div class="col-md-12">
				<h1>{{ restaurant.name }}</h1>
				<span class="badge badge-secondary mt-1 mb-3">
					{{ restaurant.categoryName }}
				</span>
			</div>
			<div class="col-md-4">
				<img
					class="img-responsive center-block"
					:src="restaurant.image | emptyImageFilter"
					style="width: 250px; margin-bottom: 25px"
				/>
				<div class="well">
					<ul class="list-unstyled">
						<li>
							<strong>Opening Hour:</strong>
							{{ restaurant.openingHours }}
						</li>
						<li>
							<strong>Tel:</strong>
							{{ restaurant.tel }}
						</li>
						<li>
							<strong>Address:</strong>
							{{ restaurant.address }}
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-8">
				<p>{{ restaurant.description }}</p>
			</div>
		</div>
		<hr />
		<button type="button" class="btn btn-link" @click="$router.back()">
			回上一頁
		</button>
	</div>
</template>
<script>
import { emptyImageFilter } from './../utils/mixins'
import { Toast } from '@/utils/helpers'
import adminAPI from '@/apis/admin'
import Spinner from '@/components/Spinner.vue'

export default {
	name: 'AdminRestaurant',
	mixins: [emptyImageFilter],
	components: {
		Spinner,
	},
	data() {
		return {
			restaurant: {
				id: -1,
				name: '',
				categoryName: '',
				image: '',
				openingHours: '',
				tel: '',
				address: '',
				description: '',
			},
			isLoading: true,
		}
	},
	created() {
		this.fetchRestaurant(this.$route.params.id)
	},
	beforeRouteUpdate(to, from, next) {
		this.fetchRestaurant(to.params.id)
		next()
	},
	methods: {
		async fetchRestaurant(restaurantId) {
			try {
				this.isLoading = true
				const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
				this.restaurant = {
					...this.restaurant,
					id: data.restaurant.id,
					name: data.restaurant.name,
					categoryName: data.restaurant.Category.name || '未分類',
					image: data.restaurant.image,
					openingHours: data.restaurant.opening_hours,
					tel: data.restaurant.tel,
					address: data.restaurant.address,
					description: data.restaurant.description,
				}
				this.isLoading = false
			} catch (error) {
				this.isLoading = false
				Toast.fire({
					icon: 'error',
					title: '無法取得餐廳資料，請稍後再試',
				})
			}
		},
	},
}
</script>
