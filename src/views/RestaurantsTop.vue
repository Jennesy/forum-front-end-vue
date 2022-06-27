<template>
	<div class="container py-5">
		<NavTabs />
		<h1 class="mt-5">人氣餐廳</h1>

		<hr />
		<!-- Top Restaurant Cards -->
		<div
			class="card mb-3"
			style="max-width: 540px; margin: auto"
			v-for="restaurant in restaurants"
			:key="restaurant.id"
		>
			<div class="row no-gutters">
				<div class="col-md-4">
					<router-link
						:to="{ name: 'restaurant', params: { id: restaurant.id } }"
					>
						<img class="card-img" :src="restaurant.image | emptyImageFilter" />
					</router-link>
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<h5 class="card-title">{{ restaurant.name }}</h5>
						<span class="badge badge-secondary"
							>收藏數：{{ restaurant.FavoriteCount }}</span
						>
						<p class="card-text">
							{{ restaurant.description }}
						</p>
						<router-link
							class="btn btn-primary mr-2"
							:to="{
								name: 'restaurant-dashboard',
								params: { id: restaurant.id },
							}"
							>Show
						</router-link>

						<button
							type="button"
							class="btn btn-danger mr-2"
							v-if="restaurant.isFavorited"
							@click.stop.prevent="deleteFavorite(restaurant)"
						>
							移除最愛
						</button>
						<button
							type="button"
							class="btn btn-primary"
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
</template>
<script>
import NavTabs from '../components/NavTabs.vue'
import { emptyImageFilter } from './../utils/mixins'
import { Toast } from '@/utils/helpers'
import restaurantsAPI from '@/apis/restaurants'
import usersAPI from '@/apis/users'

export default {
	mixins: [emptyImageFilter],
	components: {
		NavTabs,
	},
	data() {
		return {
			restaurants: [],
		}
	},
	methods: {
		fetchRestaurants: async function () {
			try {
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
				}))
			} catch (error) {
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法取得人氣餐廳，請稍後再試',
				})
			}
		},
		addFavorite: async function (restaurant) {
			try {
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
			} catch (error) {
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
