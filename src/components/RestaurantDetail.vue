<template>
	<div class="row">
		<div class="col-md-12 mb-3">
			<h1>{{ restaurant.name }}</h1>
			<p class="badge badge-secondary mt-1 mb-3">
				{{ restaurant.categoryName }}
			</p>
		</div>
		<div class="col-lg-4">
			<img
				class="img-responsive center-block"
				:src="restaurant.image | emptyImageFilter"
				style="width: 250px; margin-bottom: 25px"
			/>
			<div class="contact-info-wrap">
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
		<div class="col-lg-8">
			<p>{{ restaurant.description }}</p>
			<router-link
				class="btn btn-primary btn-border mr-2"
				:to="{
					name: 'restaurant-dashboard',
					params: {
						id: restaurant.id,
					},
				}"
				>Dashboard</router-link
			>

			<button
				type="button"
				class="btn btn-danger btn-border mr-2"
				:disabled="isProcessing"
				v-if="restaurant.isFavorited"
				@click.stop.prevent="deleteFavorite"
			>
				移除最愛
			</button>
			<button
				type="button"
				class="btn btn-primary btn-border mr-2"
				:disabled="isProcessing"
				v-else
				@click.stop.prevent="addFavorite"
			>
				加到最愛
			</button>
			<button
				type="button"
				class="btn btn-danger like mr-2"
				:disabled="isProcessing"
				v-if="restaurant.isLiked"
				@click.stop.prevent="deleteLike"
			>
				Unlike
			</button>
			<button
				type="button"
				class="btn btn-primary like mr-2"
				:disabled="isProcessing"
				v-else
				@click.stop.prevent="addLike"
			>
				Like
			</button>
		</div>
	</div>
</template>
<script>
import { emptyImageFilter } from './../utils/mixins'
import { Toast } from '@/utils/helpers'
import usersAPI from '@/apis/users'

export default {
	mixins: [emptyImageFilter],
	props: {
		initialRestaurant: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			restaurant: this.initialRestaurant,
			isProcessing: false,
		}
	},
	watch: {
		initialRestaurant(newValue) {
			this.restaurant = {
				...this.restaurant,
				...newValue,
			}
		},
	},
	methods: {
		addFavorite: async function () {
			try {
				this.isProcessing = true
				const { data } = await usersAPI.addFavorite(this.restaurant.id)
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				this.restaurant.isFavorited = true
				this.isProcessing = false
			} catch (error) {
				this.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法將餐廳加入最愛，請稍後再試',
				})
			}
		},
		deleteFavorite: async function () {
			try {
				this.isProcessing = true
				const { data } = await usersAPI.deleteFavorite(this.restaurant.id)
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				this.restaurant.isFavorited = false
				this.isProcessing = false
			} catch (error) {
				this.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法將餐廳移除最愛，請稍後再試',
				})
			}
		},
		addLike: async function () {
			try {
				this.isProcessing = true
				const { data } = await usersAPI.addLike(this.restaurant.id)
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				this.restaurant.isLiked = true
				this.isProcessing = false
			} catch (error) {
				this.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法Like餐廳，請稍後再試',
				})
			}
		},
		deleteLike: async function () {
			try {
				this.isProcessing = true
				const { data } = await usersAPI.deleteLike(this.restaurant.id)
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				this.restaurant.isLiked = false
				this.isProcessing = false
			} catch (error) {
				this.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法Unlike餐廳，請稍後再試',
				})
			}
		},
	},
}
</script>
