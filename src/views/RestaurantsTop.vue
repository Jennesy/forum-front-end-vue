<template>
	<div class="container py-5">
		<NavTabs />
		<h1 class="mt-5">人氣餐廳</h1>

		<hr />
		<!-- Top Restaurant Cards -->
		<Spinner v-if="isLoading" />
		<div class="card-wrapper" v-else>
			<div class="card" v-for="restaurant in restaurants" :key="restaurant.id">
				<div class="row gy-1 align-items-center">
					<div class="col-sm-4 col-lg-3 col-xl-4">
						<router-link
							:to="{ name: 'restaurant', params: { id: restaurant.id } }"
						>
							<img
								class="card-img"
								:src="restaurant.image | emptyImageFilter"
							/>
						</router-link>
					</div>
					<div class="col-sm-8 col-lg-9 col-xl-8">
						<div class="card-body">
							<h5 class="card-title">{{ restaurant.name }}</h5>
							<span class="badge badge-secondary"
								>收藏數：{{ restaurant.FavoriteCount }}</span
							>
							<p class="card-text text-truncate">
								{{ restaurant.description }}
							</p>
							<router-link
								class="btn btn-primary mr-2"
								:to="{
									name: 'restaurant-dashboard',
									params: { id: restaurant.id },
								}"
								>Dashboard
							</router-link>

							<button
								type="button"
								class="btn btn-danger mr-2"
								:disabled="restaurant.isProcessing"
								v-if="restaurant.isFavorited"
								@click.stop.prevent="deleteFavorite(restaurant)"
							>
								移除最愛
							</button>
							<button
								type="button"
								class="btn btn-primary"
								:disabled="restaurant.isProcessing"
								v-else
								@click.stop.prevent="addFavorite(restaurant)"
							>
								加到最愛
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import NavTabs from '../components/NavTabs.vue'
import { emptyImageFilter } from './../utils/mixins'
import { Toast } from '@/utils/helpers'
import restaurantsAPI from '@/apis/restaurants'
import usersAPI from '@/apis/users'
import Spinner from '@/components/Spinner.vue'

export default {
	mixins: [emptyImageFilter],
	components: {
		NavTabs,
		Spinner,
	},
	data() {
		return {
			restaurants: [],
			isLoading: true,
		}
	},
	methods: {
		fetchRestaurants: async function () {
			try {
				this.isLoading = true
				// 1. Call api
				const { data } = await restaurantsAPI.getTopRestaurants()
				// 2. Save response data to vue
				this.restaurants = data.restaurants.map((restaurant) => ({
					id: restaurant.id,
					name: restaurant.name,
					image: restaurant.image,
					FavoriteCount: restaurant.FavoriteCount,
					description: restaurant.description,
					isFavorited: restaurant.isFavorited,
					isProcessing: false, // duplicate request handling
				}))
				this.isLoading = false
			} catch (error) {
				this.isLoading = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得人氣餐廳，請稍後再試',
				})
			}
		},
		addFavorite: async function (restaurant) {
			try {
				restaurant.isProcessing = true
				// 1. Call add-favorite api
				const { data } = await usersAPI.addFavorite(restaurant.id)
				// 2. Throw error if backend add-favorite fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				// * 'restaurant' is called by reference
				// * so no need to iterate through 'restaurants' array to find data
				restaurant.isFavorited = true
				restaurant.FavoriteCount++
				restaurant.isProcessing = false
			} catch (error) {
				restaurant.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法將餐廳加入最愛，請稍後再試',
				})
			}
		},
		deleteFavorite: async function (restaurant) {
			try {
				// 1. Call delete-favorite api
				const { data } = await usersAPI.deleteFavorite(restaurant.id)
				// 2. Throw error if backend delete-favorite fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				// * 'restaurant' is called by reference
				// * so no need to iterate through 'restaurants' array to find data
				restaurant.isFavorited = false
				restaurant.FavoriteCount--
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法將餐廳移除最愛，請稍後再試',
				})
			}
		},
	},
	created() {
		this.fetchRestaurants()
	},
}
</script>
<style scoped>
.card-wrapper {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
.col-sm-4 {
	padding: 18px;
	margin-inline: 18px;
}
.card-img {
	object-fit: cover;
}
@media (min-width: 480px) {
	.col-sm-4 {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
		padding: 0;
		margin-inline: 0;
	}
	.col-sm-8 {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
	.card-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
		gap: 16px;
	}
	.card .col-xl-4 {
		align-self: stretch;
		padding: 18px;
	}
	.card-img {
		width: 100%;
		height: 100%;
		margin-left: 18px;
	}
}
@media (min-width: 768px) {
	.col-lg-3 {
		flex: 0 0 25%;
		max-width: 25%;
	}
	.col-lg-9 {
		flex: 0 0 75%;
		max-width: 75%;
	}
	.card-img {
		aspect-ratio: auto;
		margin-left: 18px;
	}
}
@media (min-width: 1200px) {
	.row {
		gap: 0;
	}
	.card .col-xl-4 {
		align-self: stretch;
		padding: 18px;
	}
	.card-img {
		width: 100%;
		height: 100%;
		margin-left: 18px;
	}
}
</style>
