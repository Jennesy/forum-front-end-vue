<template>
	<div class="col-md-6 col-lg-4">
		<div class="card mb-4">
			<img
				class="card-img-top"
				:src="restaurant.image | emptyImageFilter"
				alt="Card image cap"
				width="286px"
				height="180px"
			/>
			<div class="card-body">
				<p class="card-text title-wrap">
					<router-link
						:to="{ name: 'restaurant', params: { id: restaurant.id } }"
					>
						{{ restaurant.name }}
					</router-link>
				</p>
				<span class="badge badge-secondary">{{
					restaurant.Category ? restaurant.Category.name : '未分類'
				}}</span>
				<p class="card-text text-truncate">
					{{ restaurant.description }}
				</p>
			</div>
			<div class="card-footer">
				<button
					type="button"
					class="btn btn-danger btn-border favorite mr-2"
					:disabled="restaurant.isProcessing"
					v-if="restaurant.isFavorited"
					v-on:click.stop.prevent="deleteFavorite(restaurant.id)"
				>
					移除最愛
				</button>
				<button
					type="button"
					class="btn btn-primary btn-border favorite mr-2"
					:disabled="restaurant.isProcessing"
					v-else
					v-on:click.stop.prevent="addFavorite(restaurant.id)"
				>
					加到最愛
				</button>
				<button
					type="button"
					class="btn btn-danger like mr-2"
					:disabled="restaurant.isProcessing"
					v-if="restaurant.isLiked"
					v-on:click.stop.prevent="deleteLike(restaurant.id)"
				>
					Unlike
				</button>
				<button
					type="button"
					class="btn btn-primary like mr-2"
					:disabled="restaurant.isProcessing"
					v-else
					v-on:click.stop.prevent="addLike(restaurant.id)"
				>
					Like
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { emptyImageFilter } from '@/utils/mixins'
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
	data: function () {
		return {
			restaurant: {
				...this.initialRestaurant,
				isProcessing: false, // duplicate request handling
			},
		}
	},
	methods: {
		addFavorite: async function (restaurantId) {
			try {
				this.restaurant.isProcessing = true
				// 1. Call add-favorite api
				const { data } = await usersAPI.addFavorite(restaurantId)
				// 2. Throw error if backend add-favorite fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				this.restaurant.isFavorited = true
				this.restaurant.isProcessing = false
			} catch (error) {
				this.restaurant.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法將餐廳加入最愛，請稍後再試',
				})
			}
		},
		deleteFavorite: async function (restaurantId) {
			try {
				this.restaurant.isProcessing = true
				// 1. Call delete-favorite api
				const { data } = await usersAPI.deleteFavorite(restaurantId)
				// 2. Throw error if backend delete-favorite fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				this.restaurant.isFavorited = false
				this.restaurant.isProcessing = false
			} catch (error) {
				this.restaurant.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法將餐廳移除最愛，請稍後再試',
				})
			}
		},
		addLike: async function (restaurantId) {
			try {
				this.restaurant.isProcessing = true
				// 1. Call add-like api
				const { data } = await usersAPI.addLike(restaurantId)
				// 2. Throw error if backend add-like fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				this.restaurant.isLiked = true
				this.restaurant.isProcessing = false
			} catch (error) {
				this.restaurant.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法將餐廳點讚，請稍後再試',
				})
			}
		},
		deleteLike: async function (restaurantId) {
			try {
				this.restaurant.isProcessing = true
				// 1. Call delete-like api
				const { data } = await usersAPI.deleteLike(restaurantId)
				// 2. Throw error if backend delete-like fail
				if (data.status !== 'success') {
					throw new Error(data.message)
				}
				// 3. Update client-side data
				this.restaurant.isLiked = false
				this.restaurant.isProcessing = false
			} catch (error) {
				this.restaurant.isProcessing = false
				console.log('error: ', error)
				Toast.fire({
					icon: 'error',
					title: '無法將餐廳取消讚，請稍後再試',
				})
			}
		},
	},
}
</script>
<style scoped>
.badge.badge-secondary {
	padding: 0;
	margin: 8px 0;
	color: #bd2333;
	background-color: transparent;
}

.btn,
.btn-border.btn:hover {
	margin: 7px 14px 7px 0;
}

.card {
	margin-bottom: 2rem !important;
}
.card-img-top {
	background-color: #efefef;
}
.card-img-top {
	border-radius: 0;
	border-radius: 0.25rem;
	border-bottom-right-radius: 0.75rem;
	margin: 12px;
	margin-bottom: 0px;
	width: auto;
	object-fit: cover;
}
.card-body {
	padding: 17.5px;
}

.card-footer {
	padding: 9px 17.5px;
	border-color: transparent;
}
</style>
